import { BUSINESS_NEWS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case BUSINESS_NEWS:
            return { ...state, articles: action.payload };
        default:
            return state;
    }
}