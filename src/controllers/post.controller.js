const models = require("../models");
const response = require("../helpers/response");

// ****************************************************
// @desc    Get all posts
// @route   GET /api/post
// @access  Public
// ****************************************************

const getPosts = async (req, res) => {
  try {
    const posts = await models.post.find({});
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
    const post = await models.post.findOne({});
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

module.exports = {
  getPosts,
  getPost,
};
