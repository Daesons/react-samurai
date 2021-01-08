import React from "react";
import s from '../Dialogs.module.css'



type MessagePropsType = {
    text:string
    id:number
}


export function Message(props:MessagePropsType) {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )

}


