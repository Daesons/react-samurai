import React from "react";
import s from './AvaDescription.module.css'
import {userProfileType} from "../../redux/ProfilePageReducer";
import {Preloader} from "../../Common/Preloader/Preloader";
import { noAvatarUser } from "../../../assets/IMG";

type propsType = {
    userProfile:userProfileType
}

export const AvaDescription = (props:propsType) => {
        if(!props.userProfile.photos) {
            return <Preloader/>
        }
    return (
        <div className={s.avaDescription}>
            <div className={s.div}>
                <img className={s.img} src = {props.userProfile.photos.large === null ? noAvatarUser : props.userProfile?.photos.large }/>
            </div>
            <div className={s.description}>
                <br/> {props.userProfile.fullName}
                <br/>{props.userProfile.lookingForAJobDescription}
                <br/>{props.userProfile.aboutMe}
            </div>
        </div>
    )
}
