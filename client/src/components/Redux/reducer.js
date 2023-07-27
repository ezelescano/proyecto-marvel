import { GET_ALL_CHARACTERS } from "./actions-types";

const initialState = {
    marvelHeros: []
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CHARACTERS:
            return{
                ...state,
                marvelHeros: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;