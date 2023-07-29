import axios from "axios";
import { CREATE_HERO, GET_ALL_CHARACTERS, GET_BY_ID, RESET, SEARCH_BY_NAME } from "./actions-types";



// *************************** getAllCharacters *******************************//

export const getAllCharacters = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get("http://localhost:3001/characters")
            dispatch({ type: GET_ALL_CHARACTERS, payload: result.data })
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
            dispatch({ type: SEARCH_BY_NAME, payload: result.data })
        } catch (error) {
            console.log("error", error.message);
        }
    }
}


// ******************** reset ****************************************//

export const reset = () => {
    return async (dispatch) => {
        dispatch({ type: RESET, payload: [] })
    }
}


// ******************** get By ID ********************************//

export const getByID = (id) => {
    console.log("soy el id del action", id);
    return async (dispatch) => {
        try {
            const result = await axios.get(`http://localhost:3001/characters/${id}`)
            dispatch({ type: GET_BY_ID, payload: result.data })
        } catch (error) {
            console.log("error", error.message);
        }
    }
} 


// ********************* Create Hero *******************************//

export const createHero = (input) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CREATE_HERO, payload: true})
            await axios.post("http://localhost:3001/characters", input)
        } catch (error) {
          console.log(error);
          dispatch({type: CREATE_HERO, payload: false})  
        }
    }
}