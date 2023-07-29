import { GET_ALL_CHARACTERS, GET_BY_ID, RESET, SEARCH_BY_NAME } from "./actions-types";

const initialState = {
    marvelHeros: [],
    getName: [],
    heros: [],
    detail: {}
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                marvelHeros: action.payload
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                getName: action.payload
            }
        case RESET:
            return {
                ...state,
                getName: action.payload,
                heros: state.marvelHeros
            }
        case GET_BY_ID: {
            return {
                ...state,
                marvelHeros: [],
                heros: [],
                detail: action.payload
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;