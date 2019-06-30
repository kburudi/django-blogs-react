import {
    SIGNING_USER,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS
} from '../constants/signupConstants'

const initialState = {
    userData: [],
    error: null,
    loading: false,
    signedUp: false,
}

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case SIGNING_USER:
            return {
                ...state,
                loading: true,
                signedUp: false,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                logedUser: action.payload,
                loading: false,
                signedUp: true,
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                signedUp: false,
            }
        default:
            return state;
    }
}