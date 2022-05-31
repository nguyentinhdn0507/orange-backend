const mongoose = require("mongoose");
// const schema = new mongoose.Schema({})
const schema = new mongoose.Schema({
  fieldname: "String",
  originalname: "String",
  encoding: "String",
  mimetype: "String",
  destination: "String",
  filename: "String",
  path: "String",
  size: Number,
  dateUpload: "Date",
  status: Boolean,
});
const UpLoadModel = mongoose.model("uploadfile", schema);
module.exports = UpLoadModel;
