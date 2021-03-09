import axios from "axios";


type followType = {
    followUser: (userId: number) => Promise<followResponseType>
    unFollowUser: (userId: number) => Promise<followResponseType>
}
type followResponseType = {
    resultCode: number
    messages: string[],
    data: {}
}
type usersType = {
    getUsers: (currentPage: number, pageSize: number) => Promise<getUsersResponseType>
}
type usersItemsType = {
    name: string
    id: number
    status: string | null
    followed: boolean
    photos: { small: null | string, large: null | string }

}
type getUsersResponseType = {
    items: usersItemsType[]
    totalCount: number
    error: null | string
    pageSize: number
    currentPage: number
}
type authType = {
    authMe: () => Promise<authMeResponseType>
}
type authMeResponseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number,
        email: string,
        login: string
    }
}
type profileType = {
    getUserProfile: (userId: string) => Promise<getUserProfileResponseType>
    getUserStatus: (userId:string) => Promise<string>
    changeStatus: (title:string) => Promise<{}>
}
type getUserProfileResponseType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}



type RequestAPIType = {
    auth: authType
    security: {}
    users: usersType
    profile: profileType
    follow: followType
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '746ca7cb-0620-481a-a5d8-72c1a0c8f913'
    }
})

export const RequestsAPI: RequestAPIType = {
    auth: {
        authMe() {
            return instance.get(`auth/me`).then((response: { data: authMeResponseType }) => {
                    return response.data
                }
            )
        }
    },
    security: {},
    users: {
        getUsers(currentPage = 1, pageSize = 5) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response: { data: getUsersResponseType }) => {
                    return response.data
                }
            )
        }
    },
    profile: {
        getUserProfile (userId: string) {
            return instance.get(`profile/${userId}`).then((response: {data :getUserProfileResponseType }) =>{
                return response.data
                }
            )
        },
        getUserStatus (userId:string) {
            return instance.get(`profile/status/${userId}`).then((res: {data: string}) =>{
                console.log(res.data)
                return res.data
            })
        },
        changeStatus (title) {
            return instance.put('profile/status', {status: title}).then((res: { data :{}}) =>{
                console.log(res.data)
                return res.data
            })
        }
    },
    follow: {
        followUser(userId: number) {
            return instance.post(`follow/${userId}`).then((response: { data: followResponseType }) => {
                    return response.data
                }
            )
        },
        unFollowUser(userId: number) {
            return instance.delete(`follow/${userId}`).then((response: { data: followResponseType }) => {
                    return response.data
                }
            )
        },
    }
}