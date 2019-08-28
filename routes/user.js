const express = require("express");
const router = express.Router();
const { Validate, User } = require("../models/user");
const { Game } = require("../models/games");

router.get("/", async (req, res) => {
  res.json({
    results: await User.find().populate({
      path: "games_id",
      populate: {
        path: "category_id"
      }
    })
  });
});
router.post("/", async (req, res) => {
  const { error } = Validate(req.body);
  if (error)
    return res.status(400).send(`Error: ${error.details[0].message}...`);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send(`User Already exitis..`);

  user = new User({
    name: req.body.name,
    email: req.body.email,
    games_id: req.body.games_id
  });

  res.send(await user.save());
});
module.exports = router;
