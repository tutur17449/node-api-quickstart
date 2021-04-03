const models = require("../models");
const response = require("../helpers/response");

const getUsers = async (req, res) => {
  return res.send("ok");
};

module.exports = {
  getUsers,
};
