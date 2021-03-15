import {actionTypes} from "./Types";

export type dialogItemsType = {
    name: string
    id: number

}
export type messageItemsType = {
    text: string
    id: number

}
export type dialogsPageType = {
    dialogsData: Array<dialogItemsType>
    messagesData: Array<messageItemsType>
}

const initialState: dialogsPageType = {
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
}


export const dialogsPageReducer = (state :dialogsPageType = initialState, action: actionTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE-TO-DIALOGS':
            return{
                ...state,
                messagesData:[...state.messagesData,{id: 33, text: action.newMessage}]
            }
        default:
            return state
    }
}
// экшен отдельно вывели в функцию и вызывать будем импортом
export const addNewMessageToDialogsActionCreator = (newMessage: string) => ({
    type: 'ADD-MESSAGE-TO-DIALOGS', newMessage
}) as const
