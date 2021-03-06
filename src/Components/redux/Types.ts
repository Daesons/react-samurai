import {addNewMessageToDialogsActionCreator} from "./DialogsPageReducer";
import {addNewPostActionCreator, setUserProfile, setUserStatus} from "./ProfilePageReducer";
import {
    unFollowUser, setTotalCount, followUser, setUsers, setIsFetching, setCurrentPage, setFollowingInProgress
} from "./UsersPageReducer";
import {setAuthUserData} from "./AuthReducer";

type addNewPostActionType = ReturnType<typeof addNewPostActionCreator> // лайфхак для типизации типов экшенов
// тайпскрипт сам выбирает тип на основе объекта внутри функции но надо в концедобавлять as const
// иначе тайпскриат не поймёт что текст это константа и не просто строка
type addNewMessageToDialogsActionType = ReturnType<typeof addNewMessageToDialogsActionCreator>
type followUserType = ReturnType<typeof followUser>
type unFollowUserType = ReturnType<typeof unFollowUser>
type setUsersType = ReturnType<typeof setUsers>
type setCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalCountType = ReturnType<typeof setTotalCount>
type setIsFetchingType = ReturnType<typeof setIsFetching>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setAuthUserDataType = ReturnType<typeof setAuthUserData>
type setFollowingInProgressType = ReturnType<typeof setFollowingInProgress>
type setUserStatusType = ReturnType<typeof setUserStatus>
export type actionTypes = addNewPostActionType
    | addNewMessageToDialogsActionType
    | followUserType
    | unFollowUserType
    | setUsersType
    | setCurrentPageType
    | setTotalCountType
    | setIsFetchingType
    | setUserProfileType
    | setAuthUserDataType
    | setFollowingInProgressType
    | setUserStatusType

