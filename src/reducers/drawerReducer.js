import { DRAWER_TOGGLE } from '../actions/types';

const INITIAL_STATE = {
    drawerOpen: false,
};


const drawerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DRAWER_TOGGLE:
            return { drawerOpen: action.isDrawerOpen };
        default:
            return state;
    };
};

export default drawerReducer;