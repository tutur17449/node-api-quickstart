const express = require("express");
const passport = require("passport");
const methods = require("../controllers").auth;

class AuthRouter {
  constructor() {
    this.router = express.Router();
  }

  routes() {
    this.router.post("/login", methods.login);
    this.router.post("/register", methods.register);
    this.router.get("/me",passport.authenticate("jwt", { session: false }),methods.checkAuth);
  }

  init() {
    this.routes();
    return this.router;
  }
}

module.exports = AuthRouter;
