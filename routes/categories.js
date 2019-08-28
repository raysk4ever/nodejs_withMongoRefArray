const express = require("express");
const router = express.Router();
const { validate, Category } = require("../models/categories");

router.get("/", async (req, res) => {
  res.json({ results: await Category.find() });
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.status(400).send(`Error: ${error.details[0].message}...`);

  const { title } = req.body;
  let category = await Category.findOne({ title: req.body.title });

  if (category)
    return res.status(400).send(`Category Already exitis in the database...`);

  category = new Category({
    title
  });
  const result = await category.save();
  res.json(result);
});

module.exports = router;
