const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const user_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  games_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "games"
    }
  ]
});
const User = mongoose.model("users", user_Schema);

const validate = user => {
  const Schema = {
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    games_id: Joi.array()
      .items(Joi.objectId())
      .required()
  };
  return Joi.validate(user, Schema);
};

exports.Validate = validate;
exports.User = User;
