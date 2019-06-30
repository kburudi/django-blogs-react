import {
    FETCHING_BLOGS,
    FETCH_SUCCESS,
    FETCH_ERROR
} from '../constants/blogConsts';
import axios from 'axios';


const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const URL = "https://blog-django-z.herokuapp.com/posts/"

export const fetchAction = () => dispatch => {
    dispatch({
        type: FETCHING_BLOGS,
    });
    axios
        .get(proxyUrl + URL)
        .then(res => {
            const blogs = res.data;
            dispatch({
                type: FETCH_SUCCESS,
                payload: blogs
            });
        })
        .catch(error => {
            dispatch({
                type: FETCH_ERROR,
                error
            });
        });
};