import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./DialogsPageReducer";
import {profilePageReducer} from "./ProfilePageReducer";
import {usersPageReducer} from "./UsersPageReducer";

export type storeType = typeof store
export type dispatchType = typeof store.dispatch
export type stateType = ReturnType<typeof state>


let state = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage:usersPageReducer
});
export let store = createStore(state);
