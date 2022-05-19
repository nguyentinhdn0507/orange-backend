const express = require("express");
const { ListAllData, SaveDataFile } = require("../service/dataService");
const dataController = express.Router();
dataController.get("/", async (req, res) => {
  ListAllData(req, res);
});
dataController.post("/", async (req, res) => {
  SaveDataFile(req, res);
});
module.exports = dataController;
