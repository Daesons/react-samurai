import {actionTypes} from "./Types";
import {RequestsAPI} from "../../Api/api";
import {Dispatch} from "redux";

export type postsItemsType = {
    id?: number,
    text: string,
    countLikes: number
}
export type profilePageType = {
    postsData: Array<postsItemsType>
    userProfile: userProfileType
    status: string
}

export type userProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}


const initialState: profilePageType = {
    postsData: [
        {id: 1, text: "My first post", countLikes: 134},
        {id: 2, text: "LUL", countLikes: 5},
        {id: 3, text: "4em", countLikes: 22}],
    userProfile: {} as userProfileType,
    status: ''
}


export const profilePageReducer = (state: profilePageType = initialState, action: actionTypes) => {
    switch (action.type) {
        case 'ADD-NEW-POST':
            return {
                ...state,
                postsData: [
                    {
                        id: 4,
                        text: action.newPostMessage,
                        countLikes: Math.floor(Math.random() * 200)
                    }, ...state.postsData
                ],
            }
        case 'SET-USER-PROFILE' :
            return {
                ...state, userProfile: action.userProfile
            }
        case "SET-USER-STATUS":
            return {
                ...state, status: action.title
            }
        default:
            return state
    }
}// экшен отдельно вывели в функцию и вызывать будем импортом
export const addNewPostActionCreator = (newPostMessage: string) => ({type: "ADD-NEW-POST", newPostMessage}) as const
export const setUserStatus = (title: string) => ({
    type: 'SET-USER-STATUS', title
}) as const


export const setUserProfile = (userProfile: userProfileType) => ({type: 'SET-USER-PROFILE', userProfile}) as const

export const getUserProfileThunk = (userId: string) => (dispatch: Dispatch) => {
    RequestsAPI.profile.getUserProfile(userId).then((data) => {
        dispatch(setUserProfile(data))
    })
}
export const getUserStatusThunk = (userId: string) => (dispatch: Dispatch) => {
    RequestsAPI.profile.getUserStatus(userId).then(data => {
        dispatch(setUserStatus(data))
    })
}
