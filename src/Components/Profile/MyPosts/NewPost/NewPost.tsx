import React, {ChangeEvent} from "react";
import c from './NewPost.module.css'


type NewPostPropsType = {
    addNewPost: () => void
    changeNewTextForPost: (e:ChangeEvent<HTMLTextAreaElement>) => void
    newPostText:string
}


const NewPost = (props: NewPostPropsType) => {
    const addPost = () => {
        props.addNewPost()
    }
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextForPost(e)
    }
    return (
        <div className={c.item}>
            <h3>My posts</h3>
            <br/><textarea value={props.newPostText} onChange={onChange}/>
            <br/>
            <button onClick={addPost}> submit</button>
        </div>
    )
}
export default NewPost;