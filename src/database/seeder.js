const initMongo = require("./mongo.init");
const models = require("../models");

const databaseSeeder = async () => {
  try {
    await initMongo();

    console.log("MongoDB connected");

    const user = await models.user.create({
      email: "user@test.fr",
      password: "user123",
    });

    console.log("User created : user@test.fr / user123");

    await Promise.all([
      models.post.create({
        title: "Post 1",
        content: "Post 1 content ...",
        author: user._id,
      }),
      models.post.create({
        title: "Post 2",
        content: "Post 2 content ...",
        author: user._id,
      }),
      models.post.create({
        title: "Post 3",
        content: "Post 3 content ...",
        author: user._id,
      }),
    ]);

    console.log("Posts created");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

databaseSeeder();
