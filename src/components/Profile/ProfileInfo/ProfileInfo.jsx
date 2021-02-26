import React from "react";
import style from "./ProfileInfo.module.css";

import BackImage from "../../../Images/BackgrouondImage.jpg";
import Preloader from "../../Common/Preloader/Preloader";

function ProfileInfo(props) {
  if(!props.profile) {
    return <Preloader />
  }


  return (
    <div>
      <div>
        <img src={BackImage} alt="BackgroundImage" />
      </div>
      <div className={style.discriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        Avatar + description
        </div>
    </div>
  );
}

export default ProfileInfo;
