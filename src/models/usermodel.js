const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  username: "String",
  password: "String",
  refreshToken: "String",
});
const UserModel = mongoose.model("user", schema);
module.exports = UserModel;
