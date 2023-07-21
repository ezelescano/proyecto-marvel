const axios = require("axios");
const { Marvelhero } = require("../db")

const apiUrl = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=30d5c4cb7910a4e40ae7af26c429f57b&hash=566846e84268f76384e0690804c20718";

// *****************GET ALL CHARACTERS************************************//

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

// ********************** GET BY NAME **********************************//

const getCharacterByName = async (name) => {

    const matchArr = [];
    const resultApiDB = await getAllCharacters();
    
    const nameModify = await resultApiDB?.map((name) => name.name.toLowerCase().replace(/[^\w\s]/gi, ''))
    const nameFind = await nameModify.filter((word) => {
        const wordSplit = word.split(" ");
        console.log("soy ek wordo split", wordSplit);
        c
        // const lastFind = wordSplit.filter((nameWord) => {
            
        // })
    })
    console.log("soy el namefind", nameFind);
}



module.exports = {
    getAllCharacters,
    getCharacterByName
}