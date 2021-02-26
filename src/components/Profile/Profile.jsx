import React from "react";

import style from "./Profile.module.css";

// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    return (
      <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer />
      </div>
    );
}

export default Profile;