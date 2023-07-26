const { Router } = require("express");
const characterRouter = require("./characterRouter");
const createRouter = require("./createRouter");
const userRouter = require("./userRouter");

const mainRouter = Router();


mainRouter.use("/characters", characterRouter);

mainRouter.use("/create", createRouter);

mainRouter.use("/user", userRouter);



module.exports = mainRouter;