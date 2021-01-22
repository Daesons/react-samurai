import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile, userProfileType} from "../redux/ProfilePageReducer";
import {stateType} from "../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom'

type pathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    userProfile: userProfileType | null
}

type mapDispatchToPropsType = {
    setUserProfile: (userProfile: userProfileType) => void
}

type ownPropsType = mapStateToPropsType & mapDispatchToPropsType
type ProfileWithUrlDataAPIContainerType = RouteComponentProps<pathParamsType> & ownPropsType


export class ProfileAPIContainer extends React.Component<ProfileWithUrlDataAPIContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
           userId = '2'
        }
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile userProfile={this.props.userProfile}/>;
    }
}

export const mapStateToProps = (state: stateType): { userProfile: userProfileType | null } => ({
    userProfile: state.profilePage.userProfile
})
const ProfileWithUrlDataAPIContainer = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileWithUrlDataAPIContainer)