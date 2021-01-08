import React from "react";
import c from './Profile.module.css'
import {storeType} from "../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {AvaDescription} from "./AvaDescription/AvaDescription";

type ProfilePropsType = {
    store: storeType
}

export function Profile() {

    return (<div>
            <ProfileHeader/>
            <AvaDescription/>
            <MyPostsContainer/>

        </div>
    )
}

