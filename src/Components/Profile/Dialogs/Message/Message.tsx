import React from "react";
import s from './../Dialogs.module.css'



type MessagePropsType = {
    text:string
    id:number
}


function Message(props:MessagePropsType) {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )

}



export default Message
