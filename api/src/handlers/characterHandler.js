const { getCharacterByName, getAllCharacters, getCharachterByID, createHero, deleteHero } = require("../controllers/characterController");

const getAllCharacHandler = async (req, res) => {
    const { name } = req.query;
    if (name) {
        try {
            const result = await getCharacterByName(name);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ error: "No se encontró el nombre" })
        }
    } else {
        try {
            const result = await getAllCharacters();
            res.status(200).json(result);
        } catch (error) {
            res.status(503).json({ error: "El servicio no está disponible en este momento" });
        }
    }
}


const getCharachterByIDHandler = async (req, res) => {

    const { id } = req.params;
    try {
        const source = isNaN(id) ? "Base de Datos" : "Api";
        const result = await getCharachterByID(id, source);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: "Personaje no encontrado" });
    }
}

const postCharacterHandler = async (req, res) => {
    const { name, description, image } = req.body;
    try {
        const result = await createHero(name, description, image);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({error: "Los datos no son correctos"})
    }
    
}


const deleteCharacterHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteHero(id);
        res.status(200).send("Heroe eliminado");
    } catch (error) {
        res.status(404).json({ error: "No se puedo eliminar al Heroe" });
    }
}


const updateCharacterHandler = (req, res) => {
    res.send("NIY: ESTA RUTA HACE LA ACTUALIZACION")
}


module.exports = {
    getAllCharacHandler,
    getCharachterByIDHandler,
    postCharacterHandler,
    updateCharacterHandler,
    deleteCharacterHandler
};