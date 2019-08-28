const mongoose = require("mongoose");
const joi = require("joi");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

const Category = mongoose.model("categories", categorySchema);

const validateCategory = category => {
  const Schema = {
    title: joi.string().required()
  };
  return joi.validate(category, Schema);
};

exports.validate = validateCategory;
exports.Category = Category;
