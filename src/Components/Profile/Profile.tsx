import React from "react";
import c from './Profile.module.css'
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MyPosts from "./MyPosts/MyPosts";
import AvaDescription from "./AvaDescription/AvaDescription";
import {storeType} from "../redux/redux-store";

type ProfilePropsType = {
    store: storeType
}

function Profile() {

    return (<div>
            <ProfileHeader/>
            <AvaDescription/>
            <MyPosts/>

        </div>
    )
}

export default Profile;