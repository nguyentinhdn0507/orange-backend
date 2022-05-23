const {
  AddFile,
  FindAllRepo,
  DeleteOneRepo,
} = require("../repository/upLoadRepository");
async function UploadService(req, res) {
  console.log("file", req.file);
  const file = req.file;
  if (!file) {
    const error = new Error("Please Upload a file");
    error.httpStatusCode = 400;
  }
  const dateUpload = Date.now();
  const status = false;
  // console.log(Date.now());
  const newFile = { ...file, dateUpload, status };
  await AddFile(newFile);
  await res.send(newFile);
}
async function FindAllService(req, res) {
  const files = await FindAllRepo();
  console.log("files", files);
  console.log(files);
  if (files) {
    return res.send(files);
  } else {
    return res.send({ message: "loi" });
  }
}
async function DeleteService(req, res) {
  const files = await DeleteOneRepo(req.params.id);
  if (files.deletedCount == 0) {
    return res.status(400).json({ message: "Delete Fail" });
  } else {
    return res.status(200).json({ ...files, message: "Delete success" });
  }
}
module.exports = { UploadService, FindAllService, DeleteService };
