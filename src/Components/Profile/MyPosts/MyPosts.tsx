import React, {ChangeEvent} from "react";
import c from './MyPosts.module.css'
import {store, storeType} from "../../redux/redux-store";
import {Post} from "./LatestPosts/Post";
import {postsItemsType} from "../../redux/ProfilePageReducer";


type mapStateToPropsType ={
    postsData:postsItemsType[]
    newPostText:string
}

type mapDispatchToProps = {
    addNewPost:(newPostText:string)=>void
    changeNewTextForPost:(e: ChangeEvent<HTMLTextAreaElement>)=>void
}


export const MyPosts = (props:mapStateToPropsType & mapDispatchToProps) => {
    let mappedPostData = props.postsData.map((p) => <Post text={p.text} countLikes={p.countLikes} key={p.id}/>)

    const addNewPost = () => {
        props.addNewPost(props.newPostText)
    }
    const changeNewTextForPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextForPost(e)
    }
    return (
        <div>
            <div className={c.item}>
                <h3>My posts</h3>
                <br/><textarea value={props.newPostText} onChange={changeNewTextForPost}/>
                <br/>
                <button onClick={addNewPost}> submit</button>
            </div>
            {mappedPostData}
        </div>
    )
}
