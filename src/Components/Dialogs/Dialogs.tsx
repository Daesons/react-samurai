import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogItemsType, messageItemsType} from "../redux/DialogsPageReducer";
import {AddMessageReduxForm} from "./AddMessageForm";

type mapStateToPropsType = {
    dialogsData: dialogItemsType[]
    messagesData: messageItemsType[]
    newMessage: string


}

type mapDispatchToPropsType = {
    addNewMessageToDialogs: (newMessage: string) => void

}


export const Dialogs = (props: mapDispatchToPropsType & mapStateToPropsType) => {

    let mappedDialogsData = props.dialogsData.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let mappedMessagesData = props.messagesData.map((m) => <Message key={m.id} text={m.text} id={m.id}/>)

    const addNewMessageToDialogs = (values: { newMessage: string }) => {
        props.addNewMessageToDialogs(values.newMessage)
        console.log(values.newMessage)

    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {mappedDialogsData}
                </div>
                <div className={s.messages}>
                    {mappedMessagesData}
                    {/*  <textarea value={props.newMessage} onChange={onChangeMessage}/>
                    <button onClick={addNewMessageToDialogs}>addMessage</button>*/}
                    <AddMessageReduxForm onSubmit={addNewMessageToDialogs}/>
                </div>
            </div>
        </div>
    )

}
