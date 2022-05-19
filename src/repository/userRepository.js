const mongoose = require("mongoose");
const schema = new mongoose.Schema({ username: "string", password: "string" });
const User = mongoose.model("user", schema);
// connectDB();
async function findByUserName(username) {
  const query = { username: [username] };
  const user = await User.findOne(query);
  return user;
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
async function UpdateRepo() {
  // const files = await Files.find();
  // return files;
}

module.exports = { findByUserName, findUser, findAllRepo, AddUser, UpdateRepo };
