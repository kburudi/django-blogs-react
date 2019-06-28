import React from "react";
import ReactDOM from "react-dom";
import App from './containers/App'
import { Provider } from 'react-redux'
import store from './stores/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector("#app"));