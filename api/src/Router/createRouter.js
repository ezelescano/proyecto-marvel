const {Router} = require("express");
const { createPostHandler, deleteHandler } = require("../handlers/createHandler");

const createRouter = Router();

createRouter.post("/", createPostHandler);

createRouter.delete("/delete/:id", deleteHandler);



module.exports = createRouter;
