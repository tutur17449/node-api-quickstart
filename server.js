const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const responseTime = require("response-time");
const cors = require("cors");
const PORT = process.env.PORT || 1933;

const corsOptions = require("./src/lib/cors");
const passport = require("./src/lib/passport");
const apiRouter = require("./src/routes");
const initMongo = require("./src/database/mongo.init");

class Server {
  constructor() {
    this.server = express();
  }

  init() {
    this.server.disable("x-powered-by");
    this.server.use(passport.initialize());
    this.server.use(corsOptions);
    this.server.use(bodyParser.json({ limit: "10mb" }));
    this.server.use(bodyParser.urlencoded({ extended: true }));
    this.server.use(
      responseTime((req, res, time) => {
        console.log(
          `--------> ${req.method}  - ${res.statusCode} - ${
            req.originalUrl
          } - ${parseInt(time)} ms`
        );
      })
    );

    this.routes();
  }

  routes() {
    new apiRouter(this.server).init();
    this.start();
  }

  start() {
    initMongo()
      .then((db) => {
        console.log("MongoDB connected");
        this.server.listen(PORT, () => {
          console.log(`Server listen : ${PORT}`);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

new Server().init();
