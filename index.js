const { connectDB } = require("./db");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const userRoute = require("./src/routes/userRoutes");
const uploadRoute = require("./src/routes/uploadRoutes");
const refreshTokenRoute = require("./src/routes/refreshTokenRoute");
const { handleError } = require("./src/midleware/handleError");
const port = process.env.PORT;

const main = () => {
  connectDB();
  const app = express();
 
  app.use(cors());
  app.use(express.json());
  app.use("/user", userRoute);
  app.use("/data", uploadRoute);
  app.use("/refreshtoken", refreshTokenRoute);
  app.use(handleError);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
main();
