import React from 'react';
import s from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/image/userLarge.jpg'
import ProfileStatusWithHook from "./Status/ProfileStatusWithHook";

const ProfileInfo = (props) => {

  return (
    <div className={s.wrapper}>

      <div className={s.user}>
        <div className={s.userAvatar}>
          <img
            src={props.profile.photos.large ?
              props.profile.photos.large
              : defaultAvatar}
            alt="large"/>
        </div>
        <div className={s.userInfo}>
          <div className={s.userName}>{props.profile.fullName}</div>
          <div className={s.userStatus}>
            <ProfileStatusWithHook status={props.status}
                           updateStatus={props.updateStatus}/>
          </div>
        </div>
      </div>

    </div>
  );

}


export default ProfileInfo;