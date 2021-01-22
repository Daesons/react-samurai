import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {AvaDescription} from "./AvaDescription/AvaDescription";
import {userProfileType} from "../redux/ProfilePageReducer";

type propsType = {
    userProfile:userProfileType | null
}

export function Profile(props:propsType) {

    return (<div>
            <ProfileHeader/>
            <AvaDescription userProfile={props.userProfile} />
            <MyPostsContainer/>

        </div>
    )
}

