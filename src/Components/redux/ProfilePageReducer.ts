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
    newPostText: string
    userProfile: userProfileType
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
    newPostText: '',
    userProfile: {} as userProfileType
}


export const profilePageReducer = (state: profilePageType = initialState, action: actionTypes) => {
    switch (action.type) {
        case 'ADD-NEW-POST':
            return {
                ...state,
                postsData: [
                    ...state.postsData, {
                        id: 4,
                        text: action.newPostText,
                        countLikes: Math.floor(Math.random() * 200)
                    }
                ],
                newPostText: ''
            }
        // кейс создающий новый пост в зависимости от введенного в текст ареа
        // пушит его в массив и перерисовывает дерево(типа типа юс стейта)
        case 'CHANGE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newPostText
            }
        case 'SET-USER-PROFILE' :
            return {
                ...state, userProfile: action.userProfile
            }
        default:
            return state
    }
}// экшен отдельно вывели в функцию и вызывать будем импортом
export const addNewPostActionCreator = (newPostText: string) => ({type: "ADD-NEW-POST", newPostText}) as const
export const changeNewTextActionCreator = (newPostText: string) => ({
    type: 'CHANGE-NEW-POST-TEXT',
    newPostText
}) as const
export const setUserProfile = (userProfile: userProfileType) => ({type: 'SET-USER-PROFILE', userProfile}) as const

export const getUserProfileThunk = (userId: string) => (dispatch: Dispatch) => {
    RequestsAPI.profile.getUserProfile(userId).then((data) => {
        dispatch(setUserProfile(data))
    })
}
