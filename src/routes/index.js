const authRouter = require("./auth.routes");
const postRouter = require("./post.routes");

class ApiRouter {
  constructor(server) {
    this.server = server;
    this.prefix = "/api";
  }

  routes() {
    const authRoutes = new authRouter().init();
    this.server.use(`${this.prefix}/auth`, authRoutes);

    const postRoutes = new postRouter().init();
    this.server.use(`${this.prefix}/post`, postRoutes);
  }

  init() {
    this.routes();
  }
}

module.exports = ApiRouter;
