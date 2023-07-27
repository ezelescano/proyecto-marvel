import axios from "axios";
import { GET_ALL_CHARACTERS } from "./actions-types";

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