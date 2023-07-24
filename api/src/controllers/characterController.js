const axios = require("axios");
const { Marvelhero } = require("../db")

const apiUrl = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=30d5c4cb7910a4e40ae7af26c429f57b&hash=566846e84268f76384e0690804c20718";

// *****************GET ALL CHARACTERS**********************************************//

const getApiCharacters = async () => {
    const apiData = (await axios.get(apiUrl)).data;
    const apiFiter = apiData?.data.results.map(hero => ({
        id: hero.id,
        name: hero.name,
        description: hero.description,
        image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
    }))
    return apiFiter;
}

const getAllCharacters = async () => {
    const charactersDB = await Marvelhero.findAll({
        attributes: ["name", "description", "image"]
    });
    const apiResult = await getApiCharacters();
    return charactersDB ? [...charactersDB, ...apiResult] : apiResult;
}

// ********************** GET BY NAME ************************************************//

const getCharacterByName = async (name) => {

    const matchArr = [];
    const resultApiDB = await getAllCharacters();

    const nameModify = await resultApiDB?.map((name, index) => ({
        index: index,
        name: name.name.toLowerCase().replace(/[^\w\s]/gi, ''),
    }))
    const nameFind = await nameModify?.filter((word) => word.name.includes(name.toLowerCase()))
    nameFind.forEach(indice => {
        matchArr.push(resultApiDB[indice.index])
    });
    return matchArr;
}

// ************************* GET BY ID ************************************************//


const getCharachterByID = async (id, source) => {
    console.log("soy el id", id);
    if (source === "Base de Datos") {
        const result = await Marvelhero.findByPk(id);
        return result;
    } else {
        const apiData = (await axios.get(apiUrl)).data.data.results;
        const result2 = await apiData?.find((hero) => hero.id == id);
        return result2;
    }

}

//  ************************************** CREATE HERO ********************************//

const createHero = async (name, description, image) => {
    if (typeof name !== 'string' || name.trim().length === 0 ||
        typeof image !== 'string' || image.trim().length === 0) {
        return "Debe completar los campos";
    } else {
        try {
            let newHero = await Marvelhero.create({
                name,
                description,
                image
            });
            console.log("spy el newHero", newHero);
            return "Heroe Creado exitosamente!!";
        } catch (error) {
            console.error("Error al crear el héroe:", error.message);
            return "Hubo un error al crear el héroe. Por favor, inténtelo nuevamente";
        }
    }
}

// ************************************** DELETE HERO *********************************//

const deleteHero = async (id) => {
    await Marvelhero.destroy({
        where: {
            id: id 
        }
    });
}

module.exports = {
    getAllCharacters,
    getCharacterByName,
    getCharachterByID,
    createHero,
    deleteHero
}

