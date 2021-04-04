const express = require("express");
const passport = require("passport");
const methods = require("../controllers").post;

class PostRouter {
  constructor() {
    this.router = express.Router();
  }

  routes() {
    this.router.get("/", methods.getPosts);
    this.router.get("/:id", methods.getPost);
    this.router.post(
      "/",
      passport.authenticate("jwt", { session: false }),
      methods.createPost
    );
    this.router.put(
      "/:id",
      passport.authenticate("jwt", { session: false }),
      methods.updatePost
    );
    this.router.delete(
      "/:id",
      passport.authenticate("jwt", { session: false }),
      methods.deletePost
    );
  }

  init() {
    this.routes();
    return this.router;
  }
}

module.exports = PostRouter;
