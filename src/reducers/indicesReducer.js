import { FETCH_INDICES } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_INDICES:
            return {
                ...state,
                indices: action.payload,
            };
        default:
            return state;
    }
};