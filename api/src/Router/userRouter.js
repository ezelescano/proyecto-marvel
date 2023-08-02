const { Router } = require("express");
const createtUserhandler = require("../handlers/userHandler.js")

const userRouter = Router();

userRouter.post("/", createtUserhandler);

module.exports = userRouter;