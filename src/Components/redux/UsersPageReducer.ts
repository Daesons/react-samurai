import {actionTypes} from "./Types";
import {Dispatch} from "redux";
import {RequestsAPI} from "../../Api/api";

export type usersItemsType = {
    name: string
    id: number
    status: string | null
    followed: boolean
    photos: { small: null | string, large: null | string }

}
export type usersPageType = {
    usersData: usersItemsType[]
    totalCount: number
    error: null | string
    pageSize: number
    currentPage: number
    isFetching: boolean
    inProgress: number[]
}


const initialState: usersPageType = {
    usersData: [] as usersItemsType[],
    totalCount: 20,
    pageSize: 5,
    error: null,
    currentPage: 1,
    isFetching: false,
    inProgress: []

}


export const usersPageReducer = (state: usersPageType = initialState, action: actionTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return {
                ...state, usersData: action.usersData
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET-TOTAL-COUNT':
            return {
                ...state, totalCount: action.totalCount
            }
        case "SET-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "SET-FOLLOWING-IN-PROGRESS" :
            return {
                ...state, inProgress: action.isFetching
                    ? [...state.inProgress, action.userId]
                    : [...state.inProgress.filter(id=>id !== action.userId)]
            }
        default:
            return state
    }
}

export const followUser = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unFollowUser = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const setUsers = (usersData: usersItemsType[]) => ({type: 'SET-USERS', usersData}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const
export const setTotalCount = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', totalCount}) as const
export const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching}) as const
export const setFollowingInProgress = (isFetching: boolean, userId: number) => ({type: "SET-FOLLOWING-IN-PROGRESS", isFetching,userId}) as const

export const getUsersThunk = (currentPage : number, pageSize : number) => (dispatch : Dispatch) =>{
    dispatch(setIsFetching(true))
    RequestsAPI.users.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
        dispatch(setIsFetching(false))
    })
}
export const unFollowUserThunk  = (userId : number) => (dispatch: Dispatch)=>{
    dispatch(setFollowingInProgress(true, userId))
    RequestsAPI.follow.unFollowUser(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(unFollowUser(userId))
            dispatch(setFollowingInProgress(false, userId))
        }
    })
}
export const followUserThunk  = (userId : number) => (dispatch: Dispatch)=>{
    dispatch(setFollowingInProgress(true, userId))
    RequestsAPI.follow.followUser(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(followUser(userId))
            dispatch(setFollowingInProgress(false, userId))
        }
    })
}
