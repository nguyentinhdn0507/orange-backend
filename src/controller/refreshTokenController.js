const { refresherTokenService } = require("../service/refresherTokenService");

async function refresherTokenController(req, res) {
  const token = req.body.token;
  const resultRefresh = await refresherTokenService(token);
  if (resultRefresh) {
    return res.status(200).json({ token: resultRefresh });
  } else {
    return res.status(403).json({ token: "Login Fail" });
  }
}
module.exports = { refresherTokenController };
