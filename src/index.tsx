import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./Components/redux/redux-store";
import {StoreContext} from "./StoreContext";


export const EntireTree = () => {
    debugger
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>,
        document.getElementById('root')
    );
}

EntireTree()
store.subscribe(
    //   let state = store.getState()
    EntireTree
)







