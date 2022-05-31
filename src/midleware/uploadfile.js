const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
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
const uploadFile = multer({ storage: storage, limits: { fileSize: maxSize } });
module.exports = { uploadFile };
