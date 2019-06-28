import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    blogs: blogReducer,
    logedUser: loginReducer,
})

export default rootReducer;