const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  refreshToken: "String",
  isAdmin: {
    type: Boolean,
    defaultValue: true,
  },
});
const UserModel = mongoose.model("user", schema);
module.exports = UserModel;
