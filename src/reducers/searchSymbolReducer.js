import { SEARCH_SYMBOL } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case SEARCH_SYMBOL:
            return { ...state, result: action.payload };
        default:
            return state;
    }
}