import React from "react";
import {NavLink} from "react-router-dom";
import c from './Navbar.module.css'

export const Navbar = () => {
    return <nav className={c.nav}>
        <div className={c.item}>
            <NavLink activeClassName={c.activeLink} to="/Profile">Profile</NavLink>
        </div>
        <div className={c.item}>
            <NavLink activeClassName={c.activeLink} to="/Dialogs">Dialogs</NavLink>
        </div>
        <div className={c.item}>
            <NavLink activeClassName={c.activeLink} to="/News">News</NavLink>
        </div>
        <div className={c.item}>
            <NavLink activeClassName={c.activeLink} to="/Music">Music</NavLink>
        </div>
        <div className={c.item}>
            <NavLink activeClassName={c.activeLink} to="/Settings">Settings</NavLink>
        </div>
        <div className={c.item}>
            <NavLink activeClassName={c.activeLink} to="/Users">Users</NavLink>
        </div>
        <div className={c.friends}>
            <NavLink activeClassName={c.activeLink} to="/Friends">Friends</NavLink>
            <div>
                <span className={c.block}>
                    <img src='https://pbs.twimg.com/profile_images/1217716632711258112/rOJ9uVBq_400x400.jpg'/>
                    <img src='https://pbs.twimg.com/profile_images/1217716632711258112/rOJ9uVBq_400x400.jpg'/>
                    <img src='https://pbs.twimg.com/profile_images/1217716632711258112/rOJ9uVBq_400x400.jpg'/>
                </span>
            </div>
            <div className={c.c}>
                <span>
                    <span><NavLink to="/Friends/Ricardo">Ricardo</NavLink></span>
                    <span><NavLink to="/Friends/Ricardo">Ricardo</NavLink></span>
                    <span><NavLink to="/Friends/Ricardo">Ricardo</NavLink></span>
                </span>
            </div>
        </div>
    </nav>
}
