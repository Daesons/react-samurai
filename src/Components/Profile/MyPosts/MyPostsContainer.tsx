import React from "react";
import {addNewPostActionCreator} from "../../redux/ProfilePageReducer";
import {dispatchType, stateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";


let mapStateToProps = (state: stateType) => {
    return {
        postsData: state.profilePage.postsData,
    }
}
let mapDispatchToProps = (dispatch:dispatchType ) => {
    return {
        addNewPost: (newPostMessage: string) => {
            dispatch(addNewPostActionCreator(newPostMessage))
            // находит тип внутри стора иф срабатывает при совпадении типа и выполняется функция
            // функция диспатч, которая в стейте пушит newPostText, который
            // приходит из ончейнджа
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
