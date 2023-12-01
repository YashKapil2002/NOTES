const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/notes")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((e) => {
    console.log("failed");
    console.log(e);
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;