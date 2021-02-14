import { DRAWER_TOGGLE } from '../actions/types';

const INITIAL_STATE = {
    drawerOpen: false,
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DRAWER_TOGGLE:
            return { drawerOpen: action.isDrawerOpen };
        default:
            return state;
    };
};