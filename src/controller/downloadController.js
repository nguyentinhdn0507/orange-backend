const express = require("express");
const { findByIdService } = require("../service/downloadService");
const downloadController = express.Router();
downloadController.get("/:id", async (req, res) => {
  // step 1 : lấy praram Id
  await findByIdService(req, res);
});
module.exports = downloadController;
