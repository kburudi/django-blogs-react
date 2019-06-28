import {
    LOGINGIN_USER,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from '../constants/loginConstants'

const initialState = {
    userData: [],
    error: null,
    loading: false,
    loggedIn: false,
    invalid: false,
}

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case LOGINGIN_USER:
            return {
                ...state,
                loading: true,
                loggedIn: false,
                invalid: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                logedUser: action.payload,
                loading: false,
                loggedIn: true,
                invalid: false,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                loggedIn: false,
                invalid: true,
            }
        default:
            return state;
    }
}