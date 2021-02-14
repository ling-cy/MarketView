import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const INITIAL_STATE = {
    isModalOpen: false,
    index: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return { ...state, isModalOpen: true, index: action.payload };
        case CLOSE_MODAL:
            return { ...state, isModalOpen: false, index: 0 };
        default:
            return state;
    }
};

