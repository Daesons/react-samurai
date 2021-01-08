import {addNewMessageToDialogsActionCreator, changeMessageDialogsTextActionCreator,} from "./DialogsPageReducer";
import {addNewPostActionCreator, changeNewTextActionCreator} from "./ProfilePageReducer";
import {followActionCreator, serUsersActionCreator, unFollowActionCreator} from "./UsersPageReducer";

type addNewPostActionType = ReturnType<typeof addNewPostActionCreator> // лайфхак для типизации типов экшенов
// тайпскрипт сам выбирает тип на основе объекта внутри функции но надо в концедобавлять as const
// иначе тайпскриат не поймёт что текст это константа и не просто строка
type ChangeNewPostTextActionType = ReturnType<typeof changeNewTextActionCreator>
type addNewMessageToDialogsActionType = ReturnType<typeof addNewMessageToDialogsActionCreator>
type changeMessageDialogsTextActionType = ReturnType<typeof changeMessageDialogsTextActionCreator>
type followActionCreatorType = ReturnType<typeof followActionCreator>
type unFollowActionCreatorType = ReturnType<typeof unFollowActionCreator>
type setUsersActionCreatorType = ReturnType<typeof serUsersActionCreator>
export type actionTypes =
    addNewPostActionType
    | ChangeNewPostTextActionType
    | addNewMessageToDialogsActionType
    | changeMessageDialogsTextActionType
    | followActionCreatorType
    | unFollowActionCreatorType
    | setUsersActionCreatorType

