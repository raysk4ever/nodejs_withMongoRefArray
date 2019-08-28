const express = require("express");
const User = require("../routes/user");
const Games = require("../routes/games");
const Categories = require("../routes/categories");

module.exports = function(app) {
  app.use(express.json());

  app.use("/api/user", User);
  app.use("/api/games", Games);
  app.use("/api/categories", Categories);
};
