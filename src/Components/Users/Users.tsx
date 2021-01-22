import React from "react";

import {noAvatarUser} from "../../assets/IMG";
import s from './Users.module.css'
import {usersItemsType} from "../redux/UsersPageReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalCount:number
    pageSize:number
    currentPage:number
    usersData: usersItemsType[]
    unFollowUser:(userId: number)=>void
    followUser:(userId: number)=>void
    onPageChanged:(currentPage:number)=>void
}

export const Users = (props:UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => <span onClick={() => props.onPageChanged(p)}
                                  className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>)}

            {
                props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id }>
                                <img className={s.img} src={u.photos.small === null ? noAvatarUser : u.photos.small}/>
                            </NavLink>

                        </div>
                        <div>{u.followed
                            ? <button onClick={() => props.unFollowUser(u.id)}>unfollow</button>
                            : <button onClick={() => props.followUser(u.id)}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                         </span>
                         <span>
                            <div>{"u.location.country"}</div>
                            <div>{'u.location.city'}</div>
                         </span>
                    </span>
                </div>)
            }
        </div>
    )
}


