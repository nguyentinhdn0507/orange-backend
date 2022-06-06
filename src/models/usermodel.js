const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  refreshToken: "String",
  isAdmin: {
    type: Boolean,
    defaultValue: true,
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png",
  },
  type: {
    type: String,
    default: "register",
  },
  account: {
    type: String,
    required: [true, "Please add your email or phone"],
    trim: true,
    unique: true,
  },
});
const UserModel = mongoose.model("user", schema);
module.exports = UserModel;
