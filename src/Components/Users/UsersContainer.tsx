import React from "react";
import {connect, useSelector} from "react-redux";
import {Users} from "./Users";
import {dispatchType, stateType} from "../redux/redux-store";
import {
    followUser, setCurrentPage, setIsFetching,
    setTotalCount, setUsers,
    unFollowUser,
    usersItemsType
} from "../redux/UsersPageReducer";
import axios from "axios";
import {Preloader} from "../Common/Preloader/Preloader";

type mapStateToPropsType = {
    usersData: usersItemsType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    unFollowUser: (userId: number) => void
    followUser: (userId: number) => void
    setUsers: (usersData: usersItemsType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export class UsersAPIContainer extends React.Component<mapDispatchToPropsType & mapStateToPropsType/*тут должна быть типизация стейта через запятую*/> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: { data: { items: usersItemsType[], totalCount: number } }) => {

                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((response: { data: { items: usersItemsType[] } }) => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>
                :
                <Users usersData={this.props.usersData}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       followUser={this.props.followUser}
                       onPageChanged={this.onPageChanged}
                       totalCount={this.props.totalCount}
                       unFollowUser={this.props.unFollowUser}/>}

        </>
    }
}

const mapStateToProps = (state: stateType) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

//let usersData = useSelector((state:stateType) => state.usersPage.usersData)

/*const mapDispatchToProps = (dispatch: dispatchType) => {
    return {
        followUser: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unFollowUser: (userId: number) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (usersData: usersItemsType[]) => {
            dispatch(setUsersActionCreator(usersData))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(currentPageActionCreator(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(totalCountActionCreator(totalCount))
        },
        setIsFetching: (isFetching: boolean) => {
            debugger
            dispatch(setIsFetchingActionCreator(isFetching))
        }
    }
}*/

export const UsersContainer = connect(mapStateToProps,
    {followUser,unFollowUser,setUsers,setCurrentPage,setTotalCount,setIsFetching})(UsersAPIContainer)