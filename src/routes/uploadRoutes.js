const express = require("express");
// const { verifyToken } = require("../authen/auth");
const {
  showAllController,
  uploadFileController,
  showDataController,
  deleteFileController,
} = require("../controller/upLoadController");
const uploadRoute = express.Router();
uploadRoute.get("/", async (req, res) => {
  showAllController(req, res);
});
uploadRoute.get("/:id", async (req, res) => {
  showDataController(req, res);
});
uploadRoute.post("/", async (req, res) => {
  uploadFileController(req, res);
});
uploadRoute.delete("/:id", async (req, res) => {
  deleteFileController(req, res);
});

module.exports = uploadRoute;
