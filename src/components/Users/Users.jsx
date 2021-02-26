import React from 'react';
import style from "./Users.module.css";
import Photo from "./../../Images/userFoto.jpg";
import {NavLink} from "react-router-dom";

function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);


        let pages = [];

        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
            if(pages.length >= 10) {
                pages.length = 10;
            };
        };


    return (
        <div> 
                {pages.map(p => {
                   return  <span className={props.currentPage === p && style.selectedPage} onClick={() => {props.onPageChanged(p)}}>{p}</span>
                })}
                {
                    props.users.map(user => <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={"/profile/" + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : Photo} alt="" className={style.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                { user.followed 
                                    ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> 
                                    : <button onClick={() => {props.follow(user.id)}}>Follow</button> 
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
    )
}

export default Users;
