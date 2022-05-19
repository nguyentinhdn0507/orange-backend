const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  filename: "String",
  filesize: Number,
  filedate: "Date",
});
const DataFile = mongoose.model("dataUpload", schema);
async function ListDataRepo() {
  const data = await DataFile.find();
  return data;
}
async function SaveDataRepo(data) {
  const newDataFile = new DataFile({
    title: data.title,
    start: data.start,
    end: data.end,
    phone: data.phone,
    message: data.message,
  });
  await newDataFile.save(function (err) {
    if (err) {
      return handleError(err);
    }
  });
  console.log(newDataFile);
  return newDataFile;
}

module.exports = { ListDataRepo, SaveDataRepo };
