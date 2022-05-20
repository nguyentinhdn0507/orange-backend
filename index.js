const { connectDB } = require("./db");
const express = require("express");
const mongoose = require("mongoose");
const userController = require("./src/controller/userController");
const dataController = require("./src/controller/dataController");
const uploadController = require("./src/controller/upLoadController");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;

const main = () => {
  connectDB();
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/user", userController);
  app.use("/data", dataController);
  app.use("/datafile", uploadController);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
main();
