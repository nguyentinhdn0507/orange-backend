const {
  findByUserNameRepo,
  // findById,
  findUserByIdRepo,
  findUserRepo,
  // findUser,
  // findAllRepo,
  findAlUserRepo,
  AddUserRepo,
  UpdateUserRepo,
  // AddUser,
  // UpdateRepo,
  // deleteRepo,
  deleteUserRepo,
} = require("../repository/UserRepository");
const md5 = require("md5");
const { throwToken, generateRefreshToken } = require("../authen/auth");

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
async function findOneService(id) {
  const findUser = await findUserByIdRepo(id);
  console.log("login", findUser);
  if (findUser) {
    return findUser;
  } else {
    return;
  }
}
//Get All
async function showAllUserService() {
  const showAllUser = await findAlUserRepo();
  if (showAllUser) {
    return showAllUser;
  } else {
    return;
  }
}
// Register
async function registerService(user) {
  const haveUserName = await findByUserNameRepo(user.username);
  if (!haveUserName) {
    const newUser = {
      username: user.username,
      password: md5(user.password),
    };
    const result = await AddUserRepo(newUser);
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

async function updateUserService(id, password) {
  const update = await UpdateUserRepo(id, md5(password));
  if (update.modifiedCount == 0) {
    return;
  }
  return update;
}
// delete

async function deleteUserService(id) {
  const deleteUser = await deleteUserRepo(id);
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
