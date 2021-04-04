const models = require("../models");
const mandatories = require("../mandatories").post;
const response = require("../helpers/response");
const checkFields = require("../helpers/checkFields");

// ****************************************************
// @desc    Get all posts
// @route   GET /api/post
// @access  Public
// ****************************************************

const getPosts = async (req, res) => {
  try {
    const posts = await models.post.find({}).populate({
      path: "author",
      select: "email",
    });
    return response.sendApiSuccessResponse(res, 200, posts, "Get post");
  } catch (err) {
    return response.sendApiErrorResponse(res, 500, err, "An error occured");
  }
};

// ****************************************************
// @desc    Get one post
// @route   GET /api/post/:id
// @access  Public
// ****************************************************

const getPost = async (req, res) => {
  try {
    const post = await models.post.findOne({}).populate({
      path: "author",
      select: "email",
    });
    if (!post) {
      return response.sendApiErrorResponse(
        res,
        404,
        "Post not found",
        "Post not found"
      );
    }
    return response.sendApiSuccessResponse(res, 200, post, "Get post");
  } catch (err) {
    return response.sendApiErrorResponse(res, 500, err, "An error occured");
  }
};

// ****************************************************
// @desc    Create one post
// @route   POST /api/post
// @access  Private
// ****************************************************

const createPost = async (req, res) => {
  if (!req.body) {
    return response.sendApiErrorResponse(
      res,
      422,
      "Any request data",
      "Any request data"
    );
  }

  const { ok, extra, miss } = checkFields(mandatories.create, req.body);

  if (!ok) {
    return response.sendFieldsError(res, 422, "Fields error.", miss, extra);
  }

  const newPost = new models.post({
    ...req.body,
    author: req.user._id,
  });

  try {
    const post = await newPost.save();

    return response.sendApiSuccessResponse(res, 201, post, "Post created");
  } catch (err) {
    return response.sendApiErrorResponse(res, 500, err, "An error occured");
  }
};

// ****************************************************
// @desc    Update one post
// @route   PUT /api/post/:id
// @access  Private
// ****************************************************

const updatePost = async (req, res) => {
  if (!req.body) {
    return response.sendApiErrorResponse(
      res,
      422,
      "Any request data",
      "Any request data"
    );
  }

  const { ok, extra, miss } = checkFields(mandatories.update, req.body);

  if (!ok) {
    return response.sendFieldsError(res, 422, "Fields error.", miss, extra);
  }

  try {
    const post = await models.post.findOne({ _id: req.params.id });

    if (!post) {
      return response.sendApiErrorResponse(
        res,
        404,
        "Post not found",
        "Post not found"
      );
    }

    if (String(post.author) !== String(req.user._id)) {
      return response.sendApiErrorResponse(
        res,
        403,
        "Unauthorized",
        "Unauthorized"
      );
    }

    post.title = req.body.title;
    post.content = req.body.content;

    await post.save();

    return response.sendApiSuccessResponse(res, 200, post, "Post updated");
  } catch (err) {
    return response.sendApiErrorResponse(res, 500, err, "An error occured");
  }
};

// ****************************************************
// @desc    Delete one post
// @route   DELETE /api/post/:id
// @access  Private
// ****************************************************

const deletePost = async (req, res) => {
  try {
    const post = await models.post.findOne({ _id: req.params.id });

    if (!post) {
      return response.sendApiErrorResponse(
        res,
        404,
        "Post not found",
        "Post not found"
      );
    }

    if (String(post.author) !== String(req.user._id)) {
      return response.sendApiErrorResponse(
        res,
        403,
        "Unauthorized",
        "Unauthorized"
      );
    }

    await post.deleteOne();

    return response.sendApiSuccessResponse(res, 200, post, "Post deleted");
  } catch (err) {
    return response.sendApiErrorResponse(res, 500, err, "An error occured");
  }
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
