const {
  AddFileRepo,
  findByIdRepo,
  FindAllRepo,
  DeleteOneRepo,
} = require("../repository/upLoadRepository");

async function UploadService(file) {
  console.log("file", file);
  if (!file) {
    const error = new Error("Please Upload a file");
    error.httpStatusCode = 400;
    return error;
  }
  const dateUpload = Date.now();
  const status = false;
  // console.log(Date.now());
  const newFile = { ...file, dateUpload, status };
  return AddFileRepo(newFile);
}
async function findByIdService(id) {
  const file = await findByIdRepo(id);
  return file;
}
async function FindAllService() {
  const files = await FindAllRepo();
  console.log("files", files);
  console.log(files);
  if (files) {
    return files;
  } else {
    return;
  }
}
async function DeleteFileService(id) {
  const deleteFile = await DeleteOneRepo(id);
  if (deleteFile.deletedCount == 0) {
    return deleteFile;
  } else {
    return;
  }
}
module.exports = {
  findByIdService,
  UploadService,
  FindAllService,
  DeleteFileService,
};
