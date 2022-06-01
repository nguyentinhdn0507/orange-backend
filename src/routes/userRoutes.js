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
const { ContainerError } = require("../utils/ContainerError");
const userRoute = express.Router();
userRoute.get("/", verifyToken, showAllController);
userRoute.get("/:id", ContainerError(findUserIdController));
userRoute.post("/register", ContainerError(registerController));
userRoute.post("/login", ContainerError(loginController));
userRoute.delete("/:id", ContainerError(deleteController));
userRoute.put("/:id", ContainerError(updateController));

module.exports = userRoute;
