import React from 'react';

import style from "./Header.module.css";

import Logo1 from "../../Images/Logo1.svg";
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className={style.header}>
            <img  src={Logo1} alt="LogoImage" />

            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"} >Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;
