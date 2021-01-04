import React, {ChangeEvent} from "react";

import {addNewPostActionCreator, changeNewTextActionCreator} from "../../../redux/ProfilePageReducer";
import NewPost from "./NewPost";
import {store, storeType} from "../../../redux/redux-store";
import {StoreContext} from "../../../../StoreContext";


type NewPostPropsType = {
    store: storeType
}


const NewPostContainer = () => {


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
                    return (
                        <NewPost changeNewTextForPost={changeNewTextForPost} addNewPost={addNewPost}
                                 newPostText={store.getState().profilePage.newPostText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}
export default NewPostContainer;