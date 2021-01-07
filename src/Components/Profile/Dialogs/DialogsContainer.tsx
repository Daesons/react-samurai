import React, {ChangeEvent} from "react";
import {
    addNewMessageToDialogsActionCreator,
    changeMessageDialogsTextActionCreator
} from "../../redux/DialogsPageReducer";
import Dialogs from "./Dialogs";
import {dispatchType, stateType} from "../../redux/redux-store";
import {connect} from "react-redux";



let mapStateToProps = (state: stateType) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessage: state.dialogsPage.newMessage
    }
}
let mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        addNewMessageToDialogs: () => {
            dispatch(addNewMessageToDialogsActionCreator())
        },
        changeMessageDialogsText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(changeMessageDialogsTextActionCreator(e.currentTarget.value))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
