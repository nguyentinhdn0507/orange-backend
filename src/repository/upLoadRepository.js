const mongoose = require("mongoose");
const UploadModel = require("../models/uploadmodel");

async function FindAllRepo() {
  const files = await UploadModel.find();
  return files;
}
async function findByIdRepo(id) {
  const result = await UploadModel.findOne({
    _id: mongoose.Types.ObjectId(id),
  });
  return result;
}
async function AddFileRepo(file) {
  const newFile = new UploadModel(file);
  await newFile.save(function (err) {
    if (err) {
      return handleError(err);
    }
  });
  console.log(newFile);
  return newFile;
}
async function DeleteOneRepo(id) {
  const result = await UploadModel.deleteOne({
    _id: mongoose.Types.ObjectId(id),
  });
  return result;
}

module.exports = { AddFileRepo, FindAllRepo, findByIdRepo, DeleteOneRepo };
