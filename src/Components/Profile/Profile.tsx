import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import {AvaDescription} from "./AvaDescription/AvaDescription";
import {userProfileType} from "../redux/ProfilePageReducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";


type propsType = {
    userProfile: userProfileType
    status: string
    setUserStatus: (title:string)=>void
}

export function Profile(props: propsType) {

    return (<div>
            <ProfileHeader/>
            <AvaDescription userProfile={props.userProfile}/>
            <ProfileStatus setUserStatus={props.setUserStatus} status={props.status}/>
            <MyPostsContainer/>
        </div>
    )
}

