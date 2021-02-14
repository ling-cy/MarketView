import { GOOG_SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    OAuth: null,
    userId: null,
    email: null
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GOOG_SIGN_IN:
            return {
                ...state,
                isSignedIn: true,
                OAuth: "Google",
                userId: action.payload.userId,
                email: action.payload.email
            };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};