import { INPUT_VALUE } from '../actions/types';

const INITIAL_STATE = {
    inputValue: null
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_VALUE:
            return { ...state, inputValue: action.payload }
        default:
            return state;
    }
};