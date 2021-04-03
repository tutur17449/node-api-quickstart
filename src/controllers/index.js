const user = require("./user.controller");
const auth = require("./auth.controller");
const post = require("./post.controller");

const controllers = {
  user,
  auth,
  post,
};

module.exports = controllers;
