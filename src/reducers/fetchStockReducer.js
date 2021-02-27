import { FETCH_DAYCHART, FETCH_SSQUOTE, FETCH_SSSTAT, FETCH_SSNEWS } from '../actions/types';

const fetchStockReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_DAYCHART:
            return { ...state, dayChart: action.payload.dayChart };
        case FETCH_SSQUOTE:
            return { ...state, resQuote: action.payload };
        case FETCH_SSSTAT:
            return { ...state, resStat: action.payload };
        case FETCH_SSNEWS:
            return { ...state, resNews: action.payload };
        default:
            return state;
    }
}

export default fetchStockReducer;