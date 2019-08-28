const express = require("express");
const router = express.Router();
const { Game, validate } = require("../models/games");
router.get("/", async (req, res) => {
  res.json({ results: await Game.find().populate("category_id") });
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.status(400).send(`Error: ${error.details[0].message}....`);

  let game = await Game.findOne({ title: req.body.title });
  if (game)
    return res.status(400).send(`Game already presend in the database..`);

  game = new Game({
    title: req.body.title,
    category_id: req.body.category_id
  });

  const result = await game.save();
  res.send(result);
});

module.exports = router;
