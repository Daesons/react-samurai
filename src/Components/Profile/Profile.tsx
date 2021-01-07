import React from "react";
import c from './Profile.module.css'
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import AvaDescription from "./AvaDescription/AvaDescription";
import {storeType} from "../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: storeType
}

function Profile() {

    return (<div>
            <ProfileHeader/>
            <AvaDescription/>
            <MyPostsContainer/>

        </div>
    )
}

export default Profile;