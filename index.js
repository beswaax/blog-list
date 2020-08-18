require("dotenv").config();
const http = require("http");
const express = require("express");
const BlogCollection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
//app.use(express.static());

app.get("/blogs", (request, response) => {
  BlogCollection.find({}).then((blogs) => {
    response.json(blogs);
  });
});

app.post("/blogs", (request, response) => {
  const blog = new BlogCollection(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

app.listen(process.env.PORT);
