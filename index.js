const { connectDB } = require("./db");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const userRoute = require("./src/routes/userRoutes");
const port = process.env.PORT;

const main = () => {
  connectDB();
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/user", userRoute);
  // app.use("/data", dataController);
  // app.use("/datafile", uploadController);
  // app.use("/download", downloadController);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
main();
