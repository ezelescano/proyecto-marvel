import axios from "axios";
import { GET_ALL_CHARACTERS, RESET, SEARCH_BY_NAME } from "./actions-types";



// *************************** getAllCharacters *******************************//

export const getAllCharacters = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get("http://localhost:3001/characters")
            dispatch({type: GET_ALL_CHARACTERS, payload: result.data})
        } catch (error) {
            console.log("error", error.message);
        }
    }
}

//*********************** getByName ******************************************** */

export const getByName = (name) => {
    return async (dispatch) => {
        try {
            const result = await axios.get(`http://localhost:3001/characters?name=${name}`)
            dispatch({type: SEARCH_BY_NAME, payload: result.data})
        } catch (error) {
            console.log("error", error.message);
        }
    }
}


// ******************** reset ****************************************//

export const reset = () => {
    return async (dispatch) => {
        dispatch({type: RESET, payload: []})
    }
}