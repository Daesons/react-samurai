import React from "react";
import c from './AvaDescription.module.css'
import {userProfileType} from "../../redux/ProfilePageReducer";
import {Preloader} from "../../Common/Preloader/Preloader";

type propsType = {
    userProfile:userProfileType | null
}

export const AvaDescription = (props:propsType) => {
    debugger
        if(!props.userProfile) {
            return <Preloader/>
        }
    return (
        <div className={c.avaDescription}>
            <div className={c.div}>
                <img src = {props.userProfile?.photos.large}/>
            </div>
            <div className={c.description}>
                <br/> {props.userProfile.fullName}
                <br/>{props.userProfile.lookingForAJobDescription}
                <br/>{props.userProfile.aboutMe}
            </div>
        </div>
    )
}
