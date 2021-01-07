import React, {ChangeEvent} from "react";
import c from './MyPosts.module.css'
import {store, storeType} from "../../redux/redux-store";
import {postsItemsType} from "../../redux/Types";
import Post from "./LatestPosts/Post";

type MyPostsPropsType = {
    newPostText:string
    addPost:()=>void
    onChangeTextForPost:(e: ChangeEvent<HTMLTextAreaElement>)=>void
    postsData:postsItemsType[]
}

export const MyPosts = (props:MyPostsPropsType) => {
    let mappedPostData = props.postsData.map((p) => <Post text={p.text} countLikes={p.countLikes} key={p.id}/>)

    return (
        <div>
            <div className={c.item}>
                <h3>My posts</h3>
                <br/><textarea value={props.newPostText} onChange={props.onChangeTextForPost}/>
                <br/>
                <button onClick={props.addPost}> submit</button>
            </div>
            {mappedPostData}
        </div>
    )
}
export default MyPosts;