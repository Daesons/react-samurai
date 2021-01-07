import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Components/redux/redux-store";
import {StoreContext} from "./StoreContext";
import {Provider} from "react-redux";


export const EntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}

EntireTree()
store.subscribe(
    //   let state = store.getState()
    EntireTree
)







