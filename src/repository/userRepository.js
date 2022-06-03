const md5 = require("md5");
const mongoose = require("mongoose");
const UserModel = require("../models/usermodel");
const User = UserModel;
async function findByUserNameRepo(username) {
  const query = { username: [username] };
  const user = await User.findOne(query);
  return user;
}
async function findUserByIdRepo(id) {
  const query = { _id: mongoose.Types.ObjectId(id) };
  const userId = await User.findOne(query);
  return userId;
}
async function findUserRepo(username, password) {
  const query = { username: username, password: password };
  const user = await User.findOne(query);
  return user;
}
async function findAllUserRepo() {
  const user = await User.find();
  return user;
}
async function AddUserRepo(user) {
  const newUser = new User({
    username: user.username,
    password: user.password,
  });
  await newUser.save(function (err) {
    if (err) {
      return handleError(err);
    }
  });
  console.log(newUser);
  return newUser;
}
async function deleteUserRepo(id) {
  const newUser = await User.deleteOne({ _id: mongoose.Types.ObjectId(id) });
  console.log("user", newUser);
  return newUser;
}
function UpdateUserRepo(id, user) {
  console.log("user", user);
  return User.updateOne({ _id: mongoose.Types.ObjectId(id) }, user);
}

module.exports = {
  findByUserNameRepo,
  findUserByIdRepo,
  findUserRepo,
  findAllUserRepo,
  AddUserRepo,
  UpdateUserRepo,
  deleteUserRepo,
};
