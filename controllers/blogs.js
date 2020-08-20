const blogsRouter = require("express").Router();
const BlogCollection = require("../models/mongo");

blogsRouter.get("/", (request, response) => {
  BlogCollection.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogsRouter.post("/", (request, response) => {
  const blog = new BlogCollection(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = blogsRouter;
