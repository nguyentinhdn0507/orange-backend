const { findByIdRepo } = require("../repository/upLoadRepository");
async function findByIdService(req, res) {
  const files = await findByIdRepo(req.params.id);
  const dir = `./uploads/${files.filename}`;
  console.log("dir", dir);
  console.log("files", files);
  res.download(dir);
  //   if (files) {
  //     return res.send(files);
  //   } else {
  //     return res.send({ message: "loi" });
  //   }
}
module.exports = { findByIdService };
