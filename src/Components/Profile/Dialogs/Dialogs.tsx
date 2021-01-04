import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    dialogItemsType,
    messageItemsType
} from "../../redux/Types";


type DialogsPropsType = {
    addNewMessageToDialogs:()=>void
    changeMessageDialogsText:(e: ChangeEvent<HTMLTextAreaElement>)=>void
    dialogsData:dialogItemsType[]
    messagesData:messageItemsType[]
    newMessage:string

}


const Dialogs = (props: DialogsPropsType) => {

    let mappedDialogsData = props.dialogsData.map((d) => <DialogItem name={d.name} id={d.id}/>)

    let mappedMessagesData = props.messagesData.map((m) => <Message text={m.text} id={m.id}/>)

    const onClick = () => {
        props.addNewMessageToDialogs()
    }
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeMessageDialogsText(e)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {mappedDialogsData}
                </div>
                <div className={s.messages}>
                    {mappedMessagesData}
                    <textarea value={props.newMessage} onChange={onChange}/>
                    <button onClick={onClick}>addMessage</button>
                </div>
            </div>
        </div>
    )

}

export default Dialogs