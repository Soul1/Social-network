import React from 'react';
import s from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/image/userLarge.jpg'
import ProfileStatusWithHook from "./Status/ProfileStatusWithHook";

const ProfileInfo = ({profile, status, updateStatus}) => {

  return (
    <div className={s.user}>
      <div className={s.userAvatar}>
        <img
          src={profile.photos.large || defaultAvatar}
          alt="large"/>
      </div>
      <div className={s.userInfo}>
        <div className={s.userName}>{profile.fullName}</div>
        <div className={s.userStatus}>
          <ProfileStatusWithHook status={status}
                                 updateStatus={updateStatus}/>
        </div>
      </div>
    </div>
  )
};


export default ProfileInfo;