import {
    LOGINGIN_USER,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from '../../../../constants/loginConstants'
import axios from 'axios';


const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const URL = "https://blog-django-z.herokuapp.com/users/login/";

export const loginAction = userData => dispatch => {
    dispatch({
        type: LOGINGIN_USER,
    });
    axios
        .post(proxyUrl + URL, userData)
        .then(data => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.data
            });
            localStorage.setItem('token', data.data.token)
        })
        .catch(error => {
            dispatch({
                type: LOGIN_ERROR,
                error
            });

        });
};