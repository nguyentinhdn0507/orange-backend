const {
  showAll,
  login,
  deleteService,
  registerService,
  findOneService,
  updateService,
} = require("../service/userService");

async function showAllController(req, res) {
  const showAllUser = await showAll();
  if (showAllUser) {
    return res.status(200).json(showAllUser).end();
  } else {
    return res.status(400).json({ message: "Error" }).end();
  }
}
async function loginController(req, res) {
  const { username, password } = req.body;
  const token = await login(username, password);
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
  if (register) {
    return res.status(200).json(register).end;
  } else {
    return res.status(400).json({ message: "Error" }).end();
  }
}
async function deleteController(req, res) {
  const result = await deleteService(req.params.id);
  if (result) {
    return res.status(200).json({ message: "Delete Success", result }).end();
  } else {
    return res.status(400).json({ message: "Error" }).end();
  }
}
async function updateController(req, res) {
  const result = await updateService(req.params.id, req.body.password);
  if (result) {
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
