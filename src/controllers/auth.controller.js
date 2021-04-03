const models = require("../models");
const mandatories = require("../mandatories").auth;
const response = require("../helpers/response");
const checkFields = require("../helpers/checkFields");

// ****************************************************
// @desc    User register
// @route   POST /api/auth/register
// @access  Public
// ****************************************************

const register = async (req, res) => {
  if (!req.body) {
    return response.sendApiErrorResponse(
      res,
      422,
      "Any request data",
      "Any request data"
    );
  }

  const { ok, extra, miss } = checkFields(mandatories.register, req.body);

  if (!ok) {
    return response.sendFieldsError(res, 422, "Fields error.", miss, extra);
  }

  try {
    const user = await models.user.exists({ email: req.body.email });

    if (user) {
      return response.sendApiErrorResponse(
        res,
        409,
        "User already exist.",
        "User already exist."
      );
    }

    const newUser = new models.user({
      ...req.body,
    });

    await newUser.save();

    return response.sendApiSuccessResponse(
      res,
      201,
      "User created",
      "User created"
    );
  } catch (err) {
    return response.sendApiErrorResponse(res, 500, err, "An error occured");
  }
};

// ****************************************************
// @desc    User login
// @route   POST /api/auth/login
// @access  Public
// ****************************************************

const login = async (req, res) => {
  if (!req.body) {
    return response.sendApiErrorResponse(
      res,
      422,
      "Any request data",
      "Any request data"
    );
  }

  const { ok, extra, miss } = checkFields(mandatories.login, req.body);

  if (!ok) {
    return response.sendFieldsError(res, 422, "Fields error.", miss, extra);
  }

  try {
    const user = await models.user.findOne({ email: req.body.email });

    if (!user) {
      throw "Something went wrong cannot process your request right now";
    }

    const checkPassword = models.user.comparePassword(
      req.body.password,
      user.password
    );

    if (!checkPassword) {
      throw "Something went wrong cannot process your request right now";
    }

    const token = user.generateJwt(user);

    return response.sendApiSuccessResponse(
      res,
      200,
      { user, token },
      "User connected"
    );
  } catch (err) {
    return response.sendApiErrorResponse(res, 500, err, "An error occured");
  }
};

module.exports = {
  register,
  login,
};
