const { connectDB } = require("./db");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const userRoute = require("./src/routes/userRoutes");
const uploadRoute = require("./src/routes/uploadRoutes");
// const refreshTokenRoute = require("./src/routes/refreshTokenRoute");
const { handleError } = require("./src/midleware/handleError");
const port = process.env.PORT;
const client = process.env.MAIL_CLIENT_ID;
const secretKeyEmail = process.env.MAIL_CLIENT_SECRET;

const main = () => {
  connectDB();
  const app = express();
  app.use(cors());
  app.use(express.json());
  passport.use(
    new GoogleStrategy(
      {
        clientID: client,
        secretKeyEmail: secretKeyEmail,
        callbackURL: "/auth/google/callback",
      },
      (accessToken) => {
        console.log(accessToken);
      }
    )
  );
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  // app.get("/auth/google/callback", (req, res) => {
  //   console.log("req", req);
  //   res.status(200).json({ message: req.body }).end();
  // });

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.use("/data", uploadRoute);
  app.use("/user", userRoute);
  // app.use("/refreshtoken", refreshTokenRoute);
  app.use(handleError);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};
main();
