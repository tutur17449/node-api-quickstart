const express = require("express");
const passport = require("passport");
const methods = require("../controllers").user;

class UserRouter {
  constructor(passport) {
    this.passport = passport;
    this.router = express.Router();
  }

  routes() {
    this.router.get("/", methods.getUsers);
  }

  init() {
    this.routes();
    return this.router;
  }
}

module.exports = UserRouter;
