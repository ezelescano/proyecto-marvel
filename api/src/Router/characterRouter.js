const { Router } = require("express");

const { getAllCharacHandler,
    getCharachterByIDHandler,
    postCharacterHandler,
    updateCharacterHandler,
    deleteCharacterHandler
} = require("../handlers/characterHandler");

const characterRouter = Router();

characterRouter.get("/", getAllCharacHandler);

characterRouter.get("/:id", getCharachterByIDHandler);

characterRouter.post("/", postCharacterHandler);

characterRouter.put("/update/:id", updateCharacterHandler);

characterRouter.put("/delete/:id", deleteCharacterHandler);




module.exports = characterRouter;