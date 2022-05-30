const express = require("express");
const { verifyToken } = require("../authen/auth");
const {
  showAllController,
  loginController,
  deleteController,
  registerController,
  updateController,
  findUserIdController,
} = require("../controller/userController");
const userRoute = express.Router();
userRoute.get("/", verifyToken, async (req, res) => {
  showAllController(req, res);
});
userRoute.get("/:id", async (req, res) => {
  findUserIdController(req, res);
});

userRoute.post("/login", async (req, res) => {
  loginController(req, res);
});
userRoute.delete("/:id", async (req, res) => {
  deleteController(req, res);
});

userRoute.post("/register", async (req, res) => {
  registerController(req, res);
});

userRoute.put("/:id", async (req, res) => {
  updateController(req, res);
});

module.exports = userRoute;
