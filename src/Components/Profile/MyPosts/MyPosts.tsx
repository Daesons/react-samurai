import React from "react";
import c from './MyPosts.module.css'

import Post from "./LatestPosts/Post";
import {store, storeType} from "../../redux/redux-store";
import NewPostContainer from "./NewPost/NewPostContainer";


type MyPostsPropsType = {
    store: storeType
}

const MyPosts = () => {
    let mappedPostData = store.getState().profilePage.postsData.map((p) => <Post text={p.text} countLikes={p.countLikes} key={p.id}/>)

    return (
        <div>
            <NewPostContainer/>
            {mappedPostData}
        </div>
    )
}
export default MyPosts;