import React, {ChangeEvent} from "react";
import {
    addNewMessageToDialogsActionCreator,
    changeMessageDialogsTextActionCreator
} from "../redux/DialogsPageReducer";
import {dispatchType, stateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";



let mapStateToProps = (state: stateType) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessage: state.dialogsPage.newMessage,
    }
}
let mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        addNewMessageToDialogs: () => {
            dispatch(addNewMessageToDialogsActionCreator())
        },
        changeMessageDialogsText: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(changeMessageDialogsTextActionCreator(e.currentTarget.value))
            console.log(e.currentTarget.value)
        }
    }
}

const authRedirectComponent = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)
