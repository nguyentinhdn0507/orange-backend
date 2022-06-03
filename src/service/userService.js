// const {
//   findByUserNameRepo,
//   findUserByIdRepo,
//   findAlUserRepo,
//   AddUserRepo,
//   UpdateUserRepo,
//   deleteUserRepo,
//   findUserRepo,
// } = require("../repository/UserRepository");
const md5 = require("md5");
const { throwToken, generateRefreshToken } = require("../authen/auth");

async function loginService(username, password) {
  // const login = await findUserRepo(username, md5(password));
  // console.log("login", login);
  // if (login) {
  //   const { _id, username } = login;
  //   await UpdateUserRepo(_id, {
  //     refreshToken: generateRefreshToken({ _id, username }),
  //   });
  //   const result = throwToken({ _id, username });
  //   return result;
  // } else {
  //   return;
  // }
}
function findOneService(id) {
  // const findUser = findUserByIdRepo(id);
  // console.log("login", findUser);
  // if (findUser) {
  //   return findUser;
  // } else {
  //   return;
  // }
}
//Get All
function showAllUserService() {
  // const showAllUser = findAlUserRepo();
  // if (showAllUser) {
  //   return showAllUser;
  // } else {
  //   return;
  // }
}
// Register
function registerService(user) {
  // const haveUserName = findByUserNameRepo(user.username);
  // if (!haveUserName) {
  //   const newUser = {
  //     username: user.username,
  //     password: md5(user.password),
  //   };
  //   const result = AddUserRepo(newUser);
  //   if (result) {
  //     return result;
  //   } else {
  //     return;
  //   }
  // } else {
  //   return { Message: "Tên Đăng Nhập Đã Tồn Tại" };
  // }
}
//Update
function updateUserService(id, user) {
  // return UpdateUserRepo(id, user);
  // console.log("update", update);
}
// delete
function deleteUserService(id) {
  // const deleteUser = deleteUserRepo(id);
  // if (deleteUser.deletedCount == 0) {
  //   return;
  // }
  // return deleteUser;
}
module.exports = {
  loginService,
  showAllUserService,
  registerService,
  updateUserService,
  deleteUserService,
  findOneService,
};
