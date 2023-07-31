import { CHANGE_PAGE, CREATE_HERO, GET_ALL_CHARACTERS, GET_BY_ID, RESET, SEARCH_BY_NAME } from "./actions-types";

const initialState = {
    marvelHeros: [],
    getName: [],
    heros: [],
    detail: {},
    createHero: [],
    paginationPage: 1
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
        case CREATE_HERO: {
            return {
                ...state,

            }
        }
        case CHANGE_PAGE : {
            return {
                ...state,
                paginationPage: action.payload
            }
        }
        default:
            return {
                ...state,
                createHero: action.payload
            }
    }
}

export default rootReducer;