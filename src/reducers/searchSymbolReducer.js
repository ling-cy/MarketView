import { SEARCH_SYMBOL } from '../actions/types';

const searchSymbolReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_SYMBOL:
            return { ...state, result: action.payload };
        default:
            return state;
    }
}

export default searchSymbolReducer;