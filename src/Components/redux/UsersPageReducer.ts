import {actionTypes} from "./Types";

export type usersItemsType = {
    fullName: string
    id: number
    status: string
    location: { country: string, city: string }
    follow: boolean
    photoUrl: string

}
export type usersPageType = {
    usersData: usersItemsType[]
}


const initialState = {
    usersData: []
}


export const usersPageReducer = (state: usersPageType = initialState, action: actionTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: true}
                    }
                    return u
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u
                })
            }
        case 'SET-USERS':
            return{
                ...state, usersData: [...state.usersData,...action.usersData]
            }
        default:
            return state
    }
}
export const followActionCreator = (userId: number) => ({type: 'FOLLOW', userId}) as const
export const unFollowActionCreator = (userId: number) => ({type: 'UNFOLLOW', userId}) as const
export const serUsersActionCreator = (usersData: usersItemsType[]) => ({type: 'SET-USERS', usersData}) as const