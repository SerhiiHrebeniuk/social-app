import React from 'react';

import style from "./Header.module.css";

import Logo1 from "../../Images/Logo1.svg";

function Header() {
    return (
        <header className={style.header}>
            <img  src={Logo1} alt="LogoImage" />
        </header>
    )
}

export default Header;
