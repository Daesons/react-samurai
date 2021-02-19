import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {AvaDescription} from "./AvaDescription/AvaDescription";
import {userProfileType} from "../redux/ProfilePageReducer";
import {Redirect} from "react-router-dom";

type propsType = {
    userProfile: userProfileType
    isAuth: boolean
}

export function Profile(props: propsType) {
    if (!props.isAuth) {
         return <Redirect to={'/Login'}/>
    }
    return (<div>
            <ProfileHeader/>
            <AvaDescription userProfile={props.userProfile}/>
            <MyPostsContainer/>

        </div>
    )
}

