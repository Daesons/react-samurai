import {actionTypes, dialogsPageType} from "./Types";
import {strict} from "assert";

const initialState = {
    dialogsData: [
        {id: 1, name: "Petro"},
        {id: 2, name: "Valero"},
        {id: 3, name: "Russlek"},
        {id: 4, name: "Lexa"},
        {id: 5, name: "Mixa"},
        {id: 6, name: "Vedro"}
    ],
    messagesData: [
        {id: 1, text: "Yo"},
        {id: 2, text: "QQ"},
        {id: 3, text: "TT"},
        {id: 4, text: "PP"},
        {id: 5, text: "LL"},
        {id: 6, text: "VV"}
    ],
    newMessage: 'hello'
}

export const dialogsPageReducer = (state :dialogsPageType = initialState, action: actionTypes) => {
    switch (action.type) {

        case 'CHANGE-MESSAGE-DIALOGS-TEXT':
            state.newMessage = action.newText
            return state
        case 'ADD-MESSAGE-TO-DIALOGS':
            let newMessageToDialogs = state.newMessage
            state.messagesData.push({id: 33, text: newMessageToDialogs})
            state.newMessage = ''
            return state
        default:
            return state
    }
}
// экшен отдельно вывели в функцию и вызывать будем импортом
export const addNewMessageToDialogsActionCreator = () => ({
    type: 'ADD-MESSAGE-TO-DIALOGS',
}) as const
export const changeMessageDialogsTextActionCreator = (newText: string) => ({
    type: 'CHANGE-MESSAGE-DIALOGS-TEXT',
    newText: newText
}) as const