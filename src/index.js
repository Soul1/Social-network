import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import './index.css';
import App from "./App";
import store from "./redux/redus-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);
