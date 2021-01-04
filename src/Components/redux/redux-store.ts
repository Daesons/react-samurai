import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./DialogsPageReducer";
import {profilePageReducer} from "./ProfilePageReducer";
import {useState} from "react";
import {type} from "os";

export type reducersPackType = ReturnType<typeof reducersPack>


let reducersPack = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer
});
export let store = createStore(reducersPack);
export type storeType = typeof store