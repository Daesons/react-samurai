import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunk,
    getUserStatusThunk,
    setUserProfile,
    setUserStatus,
    userProfileType
} from "../redux/ProfilePageReducer";
import {stateType} from "../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";


type pathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    userProfile: userProfileType
    status: string
}

type mapDispatchToPropsType = {
    getUserProfileThunk: (userId: string) => void
    getUserStatusThunk : (userId: string)=>void
    setUserStatus: (title: string) =>void
}

type ownPropsType = mapStateToPropsType & mapDispatchToPropsType
type ProfileWithUrlDataAPIContainerType = RouteComponentProps<pathParamsType> & ownPropsType


export class ProfileAPIContainer extends React.Component<ProfileWithUrlDataAPIContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '13691'
        }
        this.props.getUserProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    render() {
        return <Profile setUserStatus={this.props.setUserStatus} userProfile={this.props.userProfile}
        status={this.props.status}/>;
    }
}

export const mapStateToProps = (state: stateType) => ({
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})
// const authRedirectComponent = withAuthRedirect(ProfileAPIContainer)
// const ProfileWithUrlDataAPIContainer = withRouter(authRedirectComponent)
// export const ProfileContainer = connect(mapStateToProps, {getUserProfileThunk})(ProfileWithUrlDataAPIContainer)
export const ProfileContainer =
    compose<React.ComponentType>
    (connect(mapStateToProps, {getUserProfileThunk,getUserStatusThunk,setUserStatus}),
        withRouter, withAuthRedirect)(ProfileAPIContainer)