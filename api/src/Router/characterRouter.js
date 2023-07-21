const { Router } = require("express");

const { getAllCharacHandler,
    getCharachterByIDHandler,
    postCharacterHandler,
    updateCharacterHandler
} = require("../handlers/characterHandler");

const characterRouter = Router();

characterRouter.get("/", getAllCharacHandler);

characterRouter.get("/:id", getCharachterByIDHandler);

characterRouter.post("/", postCharacterHandler);

characterRouter.put("/update/:id", updateCharacterHandler)




module.exports = characterRouter;