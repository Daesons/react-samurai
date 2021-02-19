import {actionTypes} from "./Types";
import {Dispatch} from "redux";
import {RequestsAPI} from "../../Api/api";
import {setIsFetching} from "./UsersPageReducer";


export type authType = {
    id: null | number
    email: string | null
    login: string | null
    isAuth: boolean

}
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: authType = initialState, action: actionTypes) => {
    switch (action.type) {
        case 'SET-USER-DATA' : {
            return {
                ...state,
                 ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}


export const setAuthUserData = (data: { id: null | number,email: string | null,login: string | null }) => ({type: 'SET-USER-DATA', data}) as const

export const getAuthUserData = () =>(dispatch: Dispatch)=>{
    dispatch(setIsFetching(true))
    RequestsAPI.auth.authMe().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data))
        }
        dispatch(setIsFetching(false))
    })
}
