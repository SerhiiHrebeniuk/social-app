import React from "react";
import style from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";


function DialogItem(props) {

    let path = "/messages/" + props.id;
    return (
        <div className={style.item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;