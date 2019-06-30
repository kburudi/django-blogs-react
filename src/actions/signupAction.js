import {
    SIGNING_USER,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS
} from '../constants/signupConstants'
import axios from 'axios';


const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const URL = "https://blog-django-z.herokuapp.com/users/new/";

const signupAction = userData => dispatch => {
    dispatch({
        type: SIGNING_USER,
    });
    axios
        .post(proxyUrl + URL, userData)
        .then(data => {
            console.log(data)
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: data.data
            });
        })
        .catch(error => {
            dispatch({
                type: SIGNUP_ERROR,
                error
            });

        });
};

export default signupAction;