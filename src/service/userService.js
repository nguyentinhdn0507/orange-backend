const {
  findUser,
  findAllRepo,
  AddUser,
  findByUserName,
  UpdateRepo,
} = require("../repository/userRepository");
const md5 = require("md5");
const { throwToken } = require("../authen/auth");

async function Login(req, res) {
  const login = await findUser(req.body.username, md5(req.body.password));

  if (login) {
    const message = "Login Success";
    const result = throwToken({ login });
    return res.status(200).json({ token: result }).end();
  } else {
    return res.status(400).json({ message: "Login Fail" }).end();
  }
}
//Get All
async function ListAll(req, res) {
  const listAllUser = await findAllRepo();
  if (listAllUser) {
    return res.status(200).json(listAllUser).end();
  } else {
    return res.status(400).json({ message: "Loi" }).end();
  }
}
// Register
async function Register(req, res) {
  const existUserName = await findByUserName(req.body.username);
  if (!existUserName) {
    const user = {
      username: req.body.username,
      password: md5(req.body.password),
    };
    const result = await AddUser(user);
    if (result) {
      return res.status(200).json(result).end();
    } else {
      return res
        .status(400)
        .json({ message: "Da xay ra loi trong qua trinh dang ki" })
        .end();
    }
  } else {
    return res.status(400).json({ message: "Ten dang nhap da ton tai" }).end();
  }
}
//Update

async function Update(req, res) {
  const update = await UpdateRepo(req.body.username, md5(req.body.password));
  if (update.modifiedCount == 0) {
    return res.status(400).json(update).end();
  }
  return res.status(200).json(update).end();
}

module.exports = { Login, ListAll, Register, Update };
