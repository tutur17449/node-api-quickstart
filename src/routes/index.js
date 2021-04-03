const userRouter = require("./user.routes");
const authRouter = require("./auth.routes");
const postRouter = require("./post.routes");

class ApiRouter {
  constructor(server) {
    this.server = server;
    this.prefix = "/api";
  }

  routes() {
    const userRoutes = new userRouter().init();
    this.server.use(`${this.prefix}/user`, userRoutes);

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
