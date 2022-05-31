const express = require("express");
const refreshTokenRoute = express.Router();
const {
  refresherTokenController,
} = require("../controller/refreshTokenController");

refreshTokenRoute.post("/", async (req, res) => {
  refresherTokenController(req, res);
});

module.exports = refreshTokenRoute;
