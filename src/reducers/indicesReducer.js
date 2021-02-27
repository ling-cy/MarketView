import { FETCH_INDICES } from '../actions/types';

const indicesReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_INDICES:
            return {
                ...state,
                indices: action.payload,
            };
        default:
            return state;
    }
}

export default indicesReducer;