const {
  loginService,
  showAllUserService,
  registerService,
  updateUserService,
  deleteUserService,
  findOneService,
} = require("../service/userService");
async function showAllController(req, res) {
  const showAllUser = await showAllUserService();
  if (showAllUser) {
    return res.status(200).json(showAllUser).end();
  } else {
    return res.status(400).json({ message: "Error" }).end();
  }
}
async function loginController(req, res) {
  const { username, password } = req.body;
  const token = await loginService(username, password);
  console.log("token", token);
  if (token) {
    return res.status(200).json({ token }).end();
  } else {
    return res.status(400).json({ Message: "Login Fail" }).end();
  }
}
async function findUserIdController(req, res) {
  const user = await findOneService(req.params.id);
  if (user) {
    return res.status(200).json(user).end();
  } else {
    return res.status(400).json({ Message: "Login Fail" }).end();
  }
}
async function registerController(req, res) {
  const register = await registerService(req.body);
  console.log("register", register);
  if (register.Message) {
    return res.status(409).json({ message: "UserName Exits" }).end();
  }
  if (register) {
    return res.status(200).json(register).end();
  } else {
    return res.status(400).json({ message: "Error" }).end();
  }
}
async function deleteController(req, res) {
  const result = await deleteUserService(req.params.id);
  if (result) {
    return res.status(200).json({ message: "Delete Success", result }).end();
  } else {
    return res.status(400).json({ message: "Error" }).end();
  }
}
async function updateController(req, res) {
  const result = await updateUserService(req.params.id, req.body);
  if (result.modifiedCount !== 0) {
    return res.status(200).json({ message: "Update Success", result }).end();
  } else {
    return res.status(400).json({ message: "Error" }).end();
  }
}

module.exports = {
  showAllController,
  loginController,
  deleteController,
  registerController,
  updateController,
  findUserIdController,
};
