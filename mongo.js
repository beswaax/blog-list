const mongoose = require("mongoose");

const URL = process.env.MONGODB_URI;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

//blogSchema.set("toJSON", transform);

module.exports = mongoose.model("Blog", blogSchema);
