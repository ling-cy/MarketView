import { FETCH_DAYCHART, FETCH_MINCHART, FETCH_SSQUOTE, ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_DAYCHART:
            return { ...state, dayChart: action.payload.dayChart };
        case FETCH_MINCHART:
            return { ...state, minChart: action.payload.minChart };
        case FETCH_SSQUOTE:
            return { ...state, resQuote: action.payload };
        case ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}