import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
    blogs: blogReducer,
    logedUser: loginReducer,
    signupUser: signupReducer,
})

export default rootReducer;