import React from "react";
import {usersItemsType} from "../redux/UsersPageReducer";

type mapStateToPropsType = {
    usersData: usersItemsType[]
}

type mapDispatchToPropsType = {
    unFollowUser: (userId: number) => void
    followUser: (userId: number) => void
    //setUser: (usersData: usersItemsType[]) => void
}

export const Users = (props: mapDispatchToPropsType & mapStateToPropsType) => {
       // if(props.usersData.length === 0) {
       //     return props.setUser([{
       //         id: 1,
       //         fullName: 'kek'
       //         , photoUrl: '',
       //         follow: false,
       //         status: 'kekwait',
       //         location: {country: 'BL', city: '17'}
       //     },
       //         {
       //             id: 2,
       //             fullName: 'wait',
       //             photoUrl: '',
       //             follow: true,
       //             status: 'waitkek',
       //             location: {country: 'UK', city: '17'}
       //         },
       //         {
       //             id: 3,
       //             fullName: 'lul',
       //             photoUrl: '',
       //             follow: true,
       //             status: 'wawkait',
       //             location: {country: 'UA', city: '17'}
       //         }
       //     ])
       // }
    return (
        <div>
            {
                props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div><img src={u.photoUrl}/></div>
                        <div>{u.follow
                            ? <button onClick={()=>props.unFollowUser(u.id)}>unfollow</button>
                            : <button onClick={()=>props.followUser(u.id)}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                         </span>
                         <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                         </span>
                    </span>
                </div>)
            }
        </div>
    )
}