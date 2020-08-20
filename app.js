const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./utils/config");
const blogsRouter = require("./controllers/blogs");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
//const middleware = require("./utils/middleware");
//app.use(express.static());

logger.info("Connecting to MongoDB");

mongoose
  .connect(config.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogsRouter);

module.exports = app;
