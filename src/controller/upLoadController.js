const express = require("express");
const uploadController = express.Router();
const multer = require("multer");
const path = require("path");
const { UploadService, FindAllService } = require("../service/upLoadService");
// set up store
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log("destination");
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    console.log("File Name", file);
    let error = null;
    // if (!file.originalname.startsWith("IMG")) error = "Name Invalid";
    const fileType = path.extname(file.originalname);
    console.log(fileType);
    cb(
      error ? new Error(error) : null,
      `${file.fieldname}-${Date.now()}${fileType}`
    );
  },
});
const maxSize = 1024 * 1024 * 20;
const upload = multer({ storage: storage, limits: { fileSize: maxSize } });
uploadController.post("/", (req, res) => {
  const uploadFile = upload.single("file");
  uploadFile(req, res, async (err) => {
    UploadService(req, res);
  });
});
uploadController.get("/", async (req, res) => {
  await FindAllService(req, res);
});
// uploadRouter.post("/multiplefile", (req, res) => {
//   const uploadFile = upload.array("Napas", 10);
//   uploadFile(req, res, async (err) => {
//     if (err) {
//       res.send(err.message);
//       return;
//     }
//     console.log("file", req.files);
//     const file = req.files;
//     if (!file) {
//       const error = new Error("Please upload a file");
//       error.httpStatusCode = 400;
//       return next(error);
//     }
//     const result = await (await getDbInstance())
//       .collection("uploads")
//       .insertMany(file);
//     let values = Object.values(result.insertedIds);
//     values = values.map((value) => {
//       return {
//         "url-ori": `http://localhost:3000/download/original/${value}`,
//         "url-resize": `http://localhost:3000/download/resize/${value}`,
//       };
//     });
//     res.send(values);
//   });
// });

// uploadRouter.get("/:id", async (req, res) => {
//   // step 1 : lấy praram Id
//   const id = req.params.id;
//   // step 2 : lấy meta data của file từ database
//   let meta = await (await getDbInstance()).collection("uploads").findOne({
//     _id: new ObjectId(id),
//   });
//   console.log("meta", meta);
//   const dir = `./uploads/${meta.filename}`;
//   console.log("dir", dir);

//   res.setHeader("Content-type", meta.mimetype);
//   res.setHeader("Content-disposition", `attachment; filename=TinhNguyen.jpg`);
//   res.download(dir, meta.originalname);
//   // step 3 : đọc file và gửi về client
//   console.log("file", req.file);
// });
module.exports = uploadController;
