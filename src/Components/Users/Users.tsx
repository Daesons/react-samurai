import React from "react";
import {usersItemsType} from "../redux/UsersPageReducer";
import axios from "axios";
import {noAvatarUser} from "../../assets/IMG";
import s from './Users.module.css'

type mapStateToPropsType = {
    usersData: usersItemsType[]
}

type mapDispatchToPropsType = {
    unFollowUser: (userId: number) => void
    followUser: (userId: number) => void
    setUsers: (usersData: usersItemsType[]) => void
}

export class Users extends React.Component<mapDispatchToPropsType & mapStateToPropsType/*тут должна быть типизация стейта через запятую*/> {

    constructor(props: (mapDispatchToPropsType & mapStateToPropsType) | Readonly<mapDispatchToPropsType & mapStateToPropsType>) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((response: { data: { items: usersItemsType[]; }; }) => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div><img className={s.img}
                                  src={u.photos.small === null ? noAvatarUser : u.photos.small}/></div>
                        <div>{u.follow
                            ? <button onClick={() => this.props.unFollowUser(u.id)}>unfollow</button>
                            : <button onClick={() => this.props.followUser(u.id)}>follow</button>}
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
}

