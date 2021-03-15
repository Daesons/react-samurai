import React, {ChangeEvent} from "react";
import c from './MyPosts.module.css'
import {Post} from "./LatestPosts/Post";
import {postsItemsType} from "../../redux/ProfilePageReducer";
import {AddPostReduxForm} from "./AddPostReduxForm";


type mapStateToPropsType ={
    postsData:postsItemsType[]
}

type mapDispatchToProps = {
    addNewPost:(newPostText:string)=>void
}


export const MyPosts = (props:mapStateToPropsType & mapDispatchToProps) => {
    let mappedPostData = props.postsData.map((p) => <Post text={p.text} countLikes={p.countLikes} key={p.id}/>)

    const addNewPost = (values: {newPostMessage: string}) => {
        props.addNewPost(values.newPostMessage)
    }

    return (
        <div>
            <div className={c.item}>
                <h3>My posts</h3>
               {/* <br/><textarea value={props.newPostText} onChange={changeNewTextForPost}/>
                <br/>
                <button onClick={addNewPost}> submit</button>*/}
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            {mappedPostData}
        </div>
    )
}

