const mongoose = require("mongoose");

module.exports = mongoose
  .connect("mongodb://localhost/refArray")
  .then(() => console.log(`connected to mongodb`))
  .catch(e => console.log(`Error: ${e}`));
