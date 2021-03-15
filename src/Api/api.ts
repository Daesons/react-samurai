import axios from "axios";


type authMeResponseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number,
        email: string,
        login: string
    }
}
type loginResponseType = {
    resultCode: number
    messages: string[],
    data: {
        userId: number
    }
}
type unLoginResponseType = {
    resultCode: number
    messages: string[]
    data: {}
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
type changeStatusResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

type followResponseType = {
    resultCode: number
    messages: string[],
    data: {}
}

type authType = {
    authMe: () => Promise<authMeResponseType>
    login: (email: string, password: string) => Promise<loginResponseType>
    unLogin: () => Promise<unLoginResponseType>
}
type usersType = {
    getUsers: (currentPage: number, pageSize: number) => Promise<getUsersResponseType>
}
type profileType = {
    getUserProfile: (userId: string) => Promise<getUserProfileResponseType>
    getUserStatus: (userId: string) => Promise<string>
    changeStatus: (title: string) => Promise<{}>
}
type followType = {
    followUser: (userId: number) => Promise<followResponseType>
    unFollowUser: (userId: number) => Promise<followResponseType>
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
            return instance.get<authMeResponseType>(`auth/me`).then((response) => {
                    return response.data
                }
            )
        },
        login(email: string, password: string) {
            return instance.post<loginResponseType>('auth/login', {email, password}).then((res) => {
                console.log(res.data, 'LOGIN')
                return res.data
            })
        },
        unLogin() {
            return instance.delete<unLoginResponseType>('auth/login').then(res => {
                console.log(res.data, 'UNLOGIN')
                return res.data
            })
        }
    },
    security: {},
    users: {
        getUsers(currentPage = 1, pageSize = 5) {
            return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
                    return response.data
                }
            )
        }
    },
    profile: {
        getUserProfile(userId: string) {
            return instance.get<getUserProfileResponseType>(`profile/${userId}`).then((response) => {
                    return response.data
                }
            )
        },
        getUserStatus(userId: string) {
            return instance.get<string>(`profile/status/${userId}`).then((res) => {
                console.log(res.data)
                return res.data
            })
        },
        changeStatus(title: string) {
            return instance.put<changeStatusResponseType>('profile/status', {status: title}).then((res) => {
                console.log(res.data)
                return res.data
            })
        }
    },
    follow: {
        followUser(userId: number) {
            return instance.post<followResponseType>(`follow/${userId}`).then((response) => {
                    return response.data
                }
            )
        },
        unFollowUser(userId: number) {
            return instance.delete<followResponseType>(`follow/${userId}`).then((response) => {
                    return response.data
                }
            )
        },
    }
}