import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {stateType} from "../redux/redux-store";
import {
    followUserThunk, getUsersThunk, setCurrentPage,
    unFollowUserThunk,
    usersItemsType
} from "../redux/UsersPageReducer";
import {Preloader} from "../Common/Preloader/Preloader";



type mapStateToPropsType = {
    usersData: usersItemsType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    inProgress: number[]
}

type mapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    unFollowUserThunk: (userId: number) => void
    followUserThunk: (userId: number) => void
}

export class UsersAPIContainer extends React.Component<mapDispatchToPropsType & mapStateToPropsType/*тут должна быть типизация стейта через запятую*/> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.getUsersThunk(currentPage, this.props.pageSize)


    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>
                :
                <Users usersData={this.props.usersData}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       totalCount={this.props.totalCount}
                       inProgress={this.props.inProgress}
                       followUserThunk={this.props.followUserThunk}
                       unFollowUserThunk={this.props.unFollowUserThunk}/>}

        </>
    }
}

const mapStateToProps = (state: stateType) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        inProgress: state.usersPage.inProgress
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
    {
        setCurrentPage,
        getUsersThunk,
        unFollowUserThunk,
        followUserThunk,
    })(UsersAPIContainer)