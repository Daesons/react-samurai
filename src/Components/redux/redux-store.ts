import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./DialogsPageReducer";
import {profilePageReducer} from "./ProfilePageReducer";
import {usersPageReducer} from "./UsersPageReducer";
import {authReducer} from "./AuthReducer";
import thunk from "redux-thunk";

export type storeType = typeof store
export type dispatchType = typeof store.dispatch
export type stateType = ReturnType<typeof state>


let state = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
});
export let store = createStore(state, applyMiddleware(thunk));

// @ts-ignore
window.store = store