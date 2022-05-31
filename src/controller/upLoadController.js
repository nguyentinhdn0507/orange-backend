const { uploadFile } = require("../midleware/uploadfile");
const {
  UploadService,
  FindAllService,
  findByIdService,
  DeleteFileService,
} = require("../service/upLoadService");
// set up store
async function uploadFileController(req, res) {
  console.log("first", req.file);
  const upload = uploadFile.single("file");
  upload(req, res, async () => {
    console.log("data", req.file);
    const file = await UploadService(req.file);
    if (file) {
      return res.status(200).json(file).end();
    } else {
      return res.status(400).json({ message: "Error" }).end();
    }
  });
}
async function showAllController(req, res) {
  const showAllData = await FindAllService();
  if (showAllData) {
    return res.status(200).json(showAllData).end();
  } else {
    return res.status(400).json({ message: "Error" }).end();
  }
}
async function showDataController(req, res) {
  const showItem = await findByIdService(req.params.id);
  if (showItem) {
    return res.status(200).json(showItem).end();
  } else {
    return res.status(400).json({ message: "Error" }).end();
  }
}
async function deleteFileController(req, res) {
  const deleteFile = await DeleteFileService(req.params.id);
  if (deleteFile) {
    return res
      .status(200)
      .json({ message: "Delete File Success", deleteFile })
      .end();
  } else {
    return res.status(400).json({ message: "Delete Error" }).end();
  }
}
// uploadController.delete("/:id", async (req, res) => {
//   const deleteFile = await DeleteService(req.params.id);
//   if (deleteFile) {
//     return res
//       .status(200)
//       .json({ message: "Delete File Success", deleteFile })
//       .end();
//   } else {
//     return res.status(400).json({ message: "Error" }).end();
//   }
// });
module.exports = {
  uploadFileController,
  showAllController,
  showDataController,
  deleteFileController,
};
