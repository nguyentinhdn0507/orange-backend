const { AddFile, FindAllRepo } = require("../repository/upLoadRepository");
async function UploadService(req, res) {
  console.log("file", req.file);
  const file = req.file;
  if (!file) {
    const error = new Error("Please Upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  const dateUpload = Date.now();
  console.log(Date.now());
  const newFile = { ...file, dateUpload };
  await AddFile(newFile);
  await res.send(newFile);
}
async function FindAllService(req, res) {
  const files = await FindAllRepo();
  console.log("files", files);
  if (files) {
    return res.send(files);
  } else {
    return res.send({ message: "loi" });
  }
}
module.exports = { UploadService, FindAllService };
