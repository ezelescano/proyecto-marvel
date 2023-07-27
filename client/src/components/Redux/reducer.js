import { GET_ALL_CHARACTERS, SEARCH_BY_NAME } from "./actions-types";

const initialState = {
    marvelHeros: [], 
    getName: []
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return{
                ...state,
                marvelHeros: action.payload
            }
            case SEARCH_BY_NAME:
                return {
                    ...state,
                    getName: action.payload
                }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;