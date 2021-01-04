import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addNewMessageToDialogsActionCreator,
    changeMessageDialogsTextActionCreator
} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import {storeType} from "../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";

type DialogsContainerPropsType = {
    store: storeType
}


const DialogsContainer = () => {



    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addNewMessageToDialogs = () => {
                        store.dispatch(addNewMessageToDialogsActionCreator(store.getState().dialogsPage.newMessage))
                    }
                    const changeMessageDialogsText = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(changeMessageDialogsTextActionCreator(e.currentTarget.value))
                    }

                    return (
                        <Dialogs addNewMessageToDialogs={addNewMessageToDialogs}
                                 changeMessageDialogsText={changeMessageDialogsText}
                                 dialogsData={store.getState().dialogsPage.dialogsData}
                                 messagesData={store.getState().dialogsPage.messagesData}
                                 newMessage={store.getState().dialogsPage.newMessage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )

}

export default DialogsContainer