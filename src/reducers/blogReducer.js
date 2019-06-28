import {
    FETCH_ERROR,
    FETCHING_BLOGS,
    FETCH_SUCCESS
} from '../constants/blogConsts'

const initialState = {
    blogs: [],
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case FETCHING_BLOGS:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                blogs: action.payload,
                loading: false
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
}