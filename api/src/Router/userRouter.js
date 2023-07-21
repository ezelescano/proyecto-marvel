const { Router } = require("express");
const getUserhandler = require("../handlers/userHandler");

const userRouter = Router();

userRouter.get("/", getUserhandler);

module.exports = userRouter;