import React from "react";
import {
    addNewMessageToDialogsActionCreator,
} from "../redux/DialogsPageReducer";
import {dispatchType, stateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";



let mapStateToProps = (state: stateType) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}
let mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        addNewMessageToDialogs: (newMessage: string) => {
            dispatch(addNewMessageToDialogsActionCreator(newMessage))
        }
    }
}

const authRedirectComponent = withAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)
