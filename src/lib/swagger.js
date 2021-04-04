const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node API quickstart",
      version: "0.1.0",
      description:
        "Node.js API quickstart made with Express, Mongoose and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/api`,
      },
    ],
  },
  apis: ["src/docs/*.yml", "./src/docs/*.js"],
};

module.exports = options;
