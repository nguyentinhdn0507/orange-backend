const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.ACCESS_TOKEN_SECRETKEY;
const expired = process.env.EXPIRED_TOKEN;

function throwToken(data) {
  return jwt.sign(data, secretKey, { expiresIn: expired });
}
const verifyToken = (req, res, next) => {
  const header = req.header("Authorization");
  const token = header && header.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token Invalid" });
  try {
    const decoded = jwt.verify(token, secretKey);
    console.log("decoded", decoded);
    next();
  } catch (error) {
    return res.status(403).json({ message: error });
  }
};
module.exports = { throwToken, verifyToken };
