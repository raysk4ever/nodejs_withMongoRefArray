const mongoose = require("mongoose");
const Joi = require("joi");
Joi.ObjectId = require("joi-objectid")(Joi);

const game_Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories"
    }
  ]
});

const Game = mongoose.model("games", game_Schema);

const validateGame = game => {
  const Schema = {
    title: Joi.string().required(),
    category_id: Joi.array()
      .items(Joi.ObjectId())
      .required()
  };
  return Joi.validate(game, Schema);
};

exports.validate = validateGame;
exports.Game = Game;
