import {actionTypes} from "./Types";

export type postsItemsType = {
    id?: number,
    text: string,
    countLikes: number
}
export type profilePageType = {
    postsData: Array<postsItemsType>
    newPostText: string
}

const initialState = {
    postsData: [
        {id: 1, text: "My first post", countLikes: 134},
        {id: 2, text: "LUL", countLikes: 5},
        {id: 3, text: "4em", countLikes: 22}],
    newPostText: ''
}


export const profilePageReducer = (state :profilePageType = initialState , action :actionTypes) => {
    switch (action.type) {
        case 'ADD-NEW-POST':
            return {
                ...state,
                postsData:[
                    ...state.postsData,{id: 4,
                    text: action.text,
                    countLikes: Math.floor(Math.random() * 200)}
                    ],
                newPostText:''
            }
        // кейс создающий новый пост в зависимости от введенного в текст ареа
        // пушит его в массив и перерисовывает дерево(типа типа юс стейта)
        case 'CHANGE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}// экшен отдельно вывели в функцию и вызывать будем импортом
export const addNewPostActionCreator = (text: string) => ({type: "ADD-NEW-POST", text: text}) as const
export const changeNewTextActionCreator = (newText: string) => ({
    type: 'CHANGE-NEW-POST-TEXT',
    newText: newText
}) as const