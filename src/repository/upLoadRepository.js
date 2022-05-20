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
  //   destination:"String"
});

const Files = mongoose.model("File", schema);
async function findByIdRepo(id) {
  const result = await Files.findOne({ _id: mongoose.Types.ObjectId(id) });
  return result;
}
async function AddFile(file) {
  const newFile = new Files(file);
  await newFile.save(function (err) {
    if (err) {
      return handleError(err);
    }
  });
  console.log(newFile);
  return newFile;
}
async function FindAllRepo() {
  const files = await Files.find();
  return files;
}

module.exports = { AddFile, FindAllRepo, findByIdRepo };
