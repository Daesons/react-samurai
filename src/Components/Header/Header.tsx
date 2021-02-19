import React from "react";
import c from './Header.module.css'
import {NavLink} from "react-router-dom";

type headerPropsType = {
    isAuth?: boolean
    login: string | null
}


export const Header = (props: headerPropsType)=> {
   return <header className={c.header}>
       <img src='https://www.meme-arsenal.com/memes/d4c068215d8808d8fecd57d61cd92e42.jpg'/>

       <div className={c.loginBlock}>
           {props.isAuth  ? props.login : <NavLink to={'/Login'}> login</NavLink>}
       </div>

    </header>
}