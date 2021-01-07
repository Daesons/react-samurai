import React, {ChangeEvent} from "react";

import {addNewPostActionCreator, changeNewTextActionCreator} from "../../redux/ProfilePageReducer";
import {store, storeType} from "../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";
import MyPosts from "./MyPosts";
import Post from "./LatestPosts/Post";


type NewPostPropsType = {
    store: storeType

}


const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addNewPost = () => {
                        store.dispatch(addNewPostActionCreator(store.getState().profilePage.newPostText))
                        // находит тип внутри стора иф срабатывает при совпадении типа и выполняется функция
                        // функция диспатч, которая в стейте пушит newPostText, который
                        // приходит из ончейнджа
                    }
                    const changeNewTextForPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(changeNewTextActionCreator(e.currentTarget.value))
                        // находит тип внутри стора иф срабатывает при совпадении типа и выполняется функция
                        console.log(e.currentTarget.value)
                        // переберает каждый символ и записывает его в newPostText, который в стейте
                    }

                    const addPost = () => {
                       addNewPost()
                    }
                    // коллбэк добавления поста
                    const onChangeTextForPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        changeNewTextForPost(e)
                    }
                    // коллбэк для текст ареа
                    return (
                        <MyPosts newPostText={store.getState().profilePage.newPostText}
                                 addPost={addPost}
                                 postsData={store.getState().profilePage.postsData}
                                 onChangeTextForPost={onChangeTextForPost}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;

