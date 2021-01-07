import React, {ChangeEvent} from "react";
import {addNewPostActionCreator, changeNewTextActionCreator} from "../../redux/ProfilePageReducer";
import {dispatchType, stateType, store} from "../../redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state: stateType) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:dispatchType ) => {
    return {
        addNewPost: (newPostText: string) => {
            dispatch(addNewPostActionCreator(newPostText))
            // находит тип внутри стора иф срабатывает при совпадении типа и выполняется функция
            // функция диспатч, которая в стейте пушит newPostText, который
            // приходит из ончейнджа
        },
        changeNewTextForPost: (e: ChangeEvent<HTMLTextAreaElement>) => {
           dispatch(changeNewTextActionCreator(e.currentTarget.value))
            // находит тип внутри стора иф срабатывает при совпадении типа и выполняется функция
            console.log(e.currentTarget.value)
            // переберает каждый символ и записывает его в newPostText, который в стейте
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
