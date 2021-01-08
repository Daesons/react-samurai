import React from "react";
import c from './Post.module.css'
;
import {postsItemsType} from "../../../redux/ProfilePageReducer";


export const Post = (props: postsItemsType )=> {

    return (
        <div className = {c.item}>
            <img src = 'https://pbs.twimg.com/profile_images/1217716632711258112/rOJ9uVBq_400x400.jpg'/>
            <br/>
            <span>{props.text}</span>
            <button>{props.countLikes}</button>
        </div>
    )

}


