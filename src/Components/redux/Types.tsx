import {
    addNewMessageToDialogsActionCreator,
    changeMessageDialogsTextActionCreator,
} from "./DialogsPageReducer";
import {addNewPostActionCreator, changeNewTextActionCreator} from "./ProfilePageReducer";

export type dialogItemsType = {
    name: string
    id: number

}
export type messageItemsType = {
    text: string
    id: number

}
export type postsItemsType = {
    id?: number,
    text: string,
    countLikes: number
}
export type profilePageType = {
    postsData: Array<postsItemsType>
    newPostText: string
}
export type dialogsPageType = {
    dialogsData: Array<dialogItemsType>
    messagesData: Array<messageItemsType>
    newMessage: string
}
type addNewPostActionType = ReturnType<typeof addNewPostActionCreator> // лайфхак для типизации типов экшенов
// тайпскрипт сам выбирает тип на основе объекта внутри функции но надо в концедобавлять as const
// иначе тайпскриат не поймёт что текст это константа и не просто строка
type ChangeNewPostTextActionType = ReturnType<typeof changeNewTextActionCreator>
type addNewMessageToDialogsActionType = ReturnType<typeof addNewMessageToDialogsActionCreator>
type changeMessageDialogsTextActionType = ReturnType<typeof changeMessageDialogsTextActionCreator>
export type actionTypes =
    addNewPostActionType
    | ChangeNewPostTextActionType
    | addNewMessageToDialogsActionType
    | changeMessageDialogsTextActionType

