const UserModel = require("../models/usermodel");
const mongoose = require("mongoose");
const User = UserModel;
async function findByUserName(username) {
  const query = { username: [username] };
  const user = await User.findOne(query);
  return user;
}
async function findById(id) {
  const query = { _id: mongoose.Types.ObjectId(id) };
  const userId = await User.findOne(query);
  return userId;
}
async function findUser(username, password) {
  const query = { username: [username], password: [password] };
  const user = await User.findOne(query);
  return user;
}
async function findAllRepo() {
  const user = await User.find();
  return user;
}
async function AddUser(user) {
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
async function deleteRepo(id) {
  const newUser = await User.deleteOne({ _id: mongoose.Types.ObjectId(id) });
  console.log("user", newUser);
  return newUser;
}
async function UpdateRepo(id, password) {
  const user = await User.updateOne(
    { _id: mongoose.Types.ObjectId(id) },
    { password: password }
  );
  console.log("user", user);
  return user;
}

module.exports = {
  findByUserName,
  findById,
  findUser,
  findAllRepo,
  AddUser,
  UpdateRepo,
  deleteRepo,
};
