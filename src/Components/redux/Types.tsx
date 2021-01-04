import {
    addNewMessageToDialogsActionCreator,
    changeMessageDialogsTextActionCreator,
    dialogsPageReducer
} from "./DialogsPageReducer";
import {addNewPostActionCreator, changeNewTextActionCreator, profilePageReducer} from "./ProfilePageReducer";

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
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type storeType = {
    _state: stateType
    rerenderEntireTree: (state: stateType) => void
    subscribe: (callback: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: actionTypes) => void
}
// type addNewPostActionType = {
//     type:'ADD-NEW-POST'
//     text: string
// } пример для типизации экшна на всякий случай
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





let types: storeType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: "My first post", countLikes: 134},
                {id: 2, text: "LUL", countLikes: 5},
                {id: 3, text: "4em", countLikes: 22}],
            newPostText: 'fdas'
        },
        dialogsPage: {
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
    },
    subscribe(callback) {
        this.rerenderEntireTree = callback
        // принимает коллбэк из индекса и заменяет функцию rerenderEntireTree() из стора
        // на функцию из индекса и вызывается

    },
    rerenderEntireTree() {
        console.log('kek')
        // при отрисовке эта функция переприсвается на коллбэк из индекса EntireTree и работает
        // в функциях как перерисовка; при нормальной работе программы никогда не вызывается(консоль.лог)
    },
    getState() {
        return this._state
        // функция, что ретурнит стейт, потому что нельзя его использовать
        // нижнее подчёркивание означает что нельзя использовать напрямую типа
        // types._state...., только через функцию
    },
    dispatch(action) {
        debugger
        /*       // диспач заменяет отдельные функции использованые ранее типа адд поста
               // у него есть action который объект
               // экшены надо  типизировать на основании того, что в нём есть
               if (action.type === 'ADD-NEW-POST') {
                   let newPost = {
                       id: 4,
                       text: action.text,
                       countLikes: Math.floor(Math.random() * 200),
                   }
                   this._state.profilePage.postsData.push(newPost)
                   this.rerenderEntireTree()
                   this._state.profilePage.newPostText = ''
                   // функция создающая новый пост в зависимости от введенного в текст ареа
                   // пушит его в массив и перерисовывает дерево(типа типа юс стейта)
               } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
                   this._state.profilePage.newPostText = action.newText
                   // newText просто переменная использованая для экшена
                   this.rerenderEntireTree()
               } else if (action.type === 'ADD-MESSAGE-TO-DIALOGS') {
                   let newDialogMessage = {
                       id: 33,
                       text: action.text
                   }
                   this._state.dialogsPage.messagesData.push(newDialogMessage)
                   this.rerenderEntireTree()
                   this._state.dialogsPage.newMessage = ''
               } else if (action.type === 'CHANGE-MESSAGE-DIALOGS-TEXT') {
                   this._state.dialogsPage.newMessage = action.newText
                   this.rerenderEntireTree()
               }*/
        types._state.dialogsPage = dialogsPageReducer(types._state.dialogsPage, action)
        types._state.profilePage = profilePageReducer(types._state.profilePage, action)
        // раскидали ифы диспача по отдельным функциям  названнымим редьюсерами
        // и сделали рефакторинг ифов на свичкейсы
        // так же мы тут заменяем types._state.dialogsPage и types._state.profilePage
        // на функции, которые используют их в параметрах вместе с экшенами
        // ну и потом перерисовка
        types.rerenderEntireTree(this._state)
    }

}

