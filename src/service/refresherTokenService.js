const { findUserByIdRepo } = require("../repository/UserRepository");
const jwt = require("jsonwebtoken");
const { throwToken } = require("../authen/auth");
async function refresherTokenService(token) {
  if (!token) return;
  const { _id, username } = jwt.decode(token);
  if (!_id) return;
  const foundUser = await findUserByIdRepo(_id);
  console.log("foundUser", foundUser);
  const refresh = await foundUser.refreshToken;
  try {
    const decoded = jwt.verify(refresh, process.env.ACCESS_TOKEN_SECRETKEY);
    return throwToken({ _id, username });
  } catch (error) {
    return `Message ${error}`;
  }
}
module.exports = { refresherTokenService };
