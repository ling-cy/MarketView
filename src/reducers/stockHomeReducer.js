import { FETCH_HOMESTOCK } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_HOMESTOCK:
            return {
                ...state,
                gainers: action.payload.gainers.data,
                losers: action.payload.losers.data,
                active: action.payload.active.data,
            };
        default:
            return state;
    }
}