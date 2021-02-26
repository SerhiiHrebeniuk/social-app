import React from "react";
import style from "./Post.module.css";

import AvatarImage from "../../../../Images/Avatar.png";

function Post(props) {
  return (
    <div className={style.post}>
      <img src={AvatarImage} alt="AvatarImg" />
      {props.message}
      <div>
        <span>Like {props.likesCount} </span>
      </div>
    </div>
  );
}

export default Post;
