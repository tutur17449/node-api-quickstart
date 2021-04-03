const express = require("express");
const passport = require("passport");
const methods = require("../controllers").auth;

class AuthRouter {
  constructor(passport) {
    this.passport = passport;
    this.router = express.Router();
  }

  routes() {
    this.router.post("/login", methods.login);
    this.router.post("/register", methods.register);
  }

  init() {
    this.routes();
    return this.router;
  }
}

module.exports = AuthRouter;
