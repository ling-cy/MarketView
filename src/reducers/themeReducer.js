import { DARK_MODE } from '../actions/types';

const dark = localStorage.getItem('darkMode') === "true" ? true : false;
const INITIAL_STATE = {
    darkMode: dark
};


const themeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DARK_MODE:
            return { darkMode: action.isDarkModeOn };
        default:
            return state;
    }
}

export default themeReducer;