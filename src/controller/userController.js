const express = require("express");
const { Login, ListAll, Register, Update } = require("../service/userService");
const userController = express.Router();

userController.get("/", async (req, res) => {
  // FindAll(req, res);
  ListAll(req, res);
});

userController.post("/login", async (req, res) => {
  Login(req, res);
});

userController.post("/register", async (req, res) => {
  Register(req, res);
});

userController.put("/", async (req, res) => {
  Update(req, res);
});

module.exports = userController;
