import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, setUserProfile, userProfileType} from "../redux/ProfilePageReducer";
import {stateType} from "../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";


type pathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    userProfile: userProfileType
}

type mapDispatchToPropsType = {
    getUserProfileThunk: (userId: string) => void
}

type ownPropsType = mapStateToPropsType & mapDispatchToPropsType
type ProfileWithUrlDataAPIContainerType = RouteComponentProps<pathParamsType> & ownPropsType


export class ProfileAPIContainer extends React.Component<ProfileWithUrlDataAPIContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileThunk(userId)
    }

    render() {
        return <Profile userProfile={this.props.userProfile}/>;
    }
}

export const mapStateToProps = (state: stateType) => ({
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
})
// const authRedirectComponent = withAuthRedirect(ProfileAPIContainer)
// const ProfileWithUrlDataAPIContainer = withRouter(authRedirectComponent)
// export const ProfileContainer = connect(mapStateToProps, {getUserProfileThunk})(ProfileWithUrlDataAPIContainer)
export const ProfileContainer = compose<React.ComponentType>(connect(mapStateToProps, {getUserProfileThunk}), withRouter, withAuthRedirect)(ProfileAPIContainer)