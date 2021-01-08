import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {dispatchType, stateType} from "../redux/redux-store";
import {
    followActionCreator,
    serUsersActionCreator,
    unFollowActionCreator,
    usersItemsType
} from "../redux/UsersPageReducer";

const mapStateToProps = (state: stateType) => {
    return {
        usersData: state.usersPage.usersData
    }
}


const mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        followUser: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unFollowUser: (userId: number) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (usersData: usersItemsType[]) => {
            dispatch(serUsersActionCreator(usersData))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)