const express = require("express");
const passport = require("passport");
const methods = require("../controllers").post;

class PostRouter {
  constructor(passport) {
    this.passport = passport;
    this.router = express.Router();
  }

  routes() {
    this.router.get("/", methods.getPosts);
  }

  init() {
    this.routes();
    return this.router;
  }
}

module.exports = PostRouter;
