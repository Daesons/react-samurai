import {actionTypes} from "./Types";

export type usersItemsType = {
    name: string
    id: number
    uniqueUrlName: string | null
    status: string | null
    location: { country: string, city: string }
    followed: boolean
    photos: { small: null | string, large: null | string }

}
export type usersPageType = {
    usersData: usersItemsType[]
    //usersData: usersItemsType[]
    totalCount: number
    error: null | string
    pageSize: number
    currentPage: number
    isFetching:boolean
}


const initialState : usersPageType = {
    usersData: [],
    totalCount: 20,
    pageSize: 5,
    error: null,
    currentPage: 1,
    isFetching:true


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
                ...state, isFetching:action.isFetching
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
