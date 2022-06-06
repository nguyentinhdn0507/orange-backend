const { OAuth2Client } = require("google-auth-library");
const md5 = require("md5");
const { throwToken, generateRefreshToken } = require("../authen/auth");
const {
  findAllUserRepo,
  findUserByIdRepo,
  findByUserNameRepo,
  UpdateUserRepo,
  deleteUserRepo,
  findUserRepo,
  AddUserRepo,
} = require("../repository/userRepository");

const client = new OAuth2Client(`${process.env.MAIL_CLIENT_ID}`);
const CLIENT_URL = `${process.env.BASE_URL}`;

async function loginService(username, password) {
  const login = await findUserRepo(username, md5(password));
  console.log("login", login);
  if (login) {
    const { _id, username } = login;
    await UpdateUserRepo(_id, {
      refreshToken: generateRefreshToken({ _id, username }),
    });
    const result = throwToken({ _id, username });
    return result;
  } else {
    return;
  }
}
function findOneService(id) {
  const findUser = findUserByIdRepo(id);
  console.log("login", findUser);
  if (findUser) {
    return findUser;
  } else {
    return;
  }
}
//Get All
function showAllUserService() {
  const showAllUser = findAllUserRepo();
  if (showAllUser) {
    return showAllUser;
  } else {
    return;
  }
}
// Register
async function registerService(user) {
  const haveUserName = await findByUserNameRepo(user.username);
  console.log(haveUserName);
  if (!haveUserName) {
    const newUser = {
      username: user.username,
      password: md5(user.password),
    };
    const result = AddUserRepo(newUser);
    if (result) {
      return result;
    } else {
      return;
    }
  } else {
    return { Message: "Tên Đăng Nhập Đã Tồn Tại" };
  }
}
//Update
function updateUserService(id, user) {
  return UpdateUserRepo(id, user);
}
// delete
function deleteUserService(id) {
  const deleteUser = deleteUserRepo(id);
  if (deleteUser.deletedCount == 0) {
    return;
  }
  return deleteUser;
}
module.exports = {
  loginService,
  showAllUserService,
  registerService,
  updateUserService,
  deleteUserService,
  findOneService,
};
