const {
  findUser,
  findAllRepo,
  AddUser,
  findByUserName,
  UpdateRepo,
  deleteRepo,
  findById,
} = require("../repository/UserRepository");
const md5 = require("md5");
const { throwToken } = require("../authen/auth");

async function login(username, password) {
  const login = await findUser(username, md5(password));
  console.log("login", login);
  if (login) {
    const { _id, username } = login;
    const result = throwToken({ _id, username });
    return result;
  } else {
    return;
  }
}
async function findOneService(id) {
  const findUser = await findById(id);
  console.log("login", findUser);
  if (findUser) {
    return findUser;
  } else {
    return;
  }
}
//Get All
async function showAll() {
  const showAllUser = await findAllRepo();
  if (showAllUser) {
    return showAllUser;
  } else {
    return;
  }
}
// Register
async function registerService(user) {
  const haveUserName = await findByUserName(user.username);
  if (!haveUserName) {
    const newUser = {
      username: user.username,
      password: md5(user.password),
    };
    const result = await AddUser(newUser);
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

async function updateService(id, password) {
  const update = await UpdateRepo(id, md5(password));
  if (update.modifiedCount == 0) {
    return;
  }
  return update;
}
// delete

async function deleteService(id) {
  const deleteUser = await deleteRepo(id);
  if (deleteUser.deletedCount == 0) {
    return;
  }
  return deleteUser;
}

module.exports = {
  login,
  showAll,
  registerService,
  updateService,
  deleteService,
  findOneService,
};
