import React from 'react';
import s from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/image/userLarge.jpg'
import ProfileStatusWithHook from "./Status/ProfileStatusWithHook";
import ProfileData from "./ProfileUserInfo";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  };
  return (
    <div className={s.user}>
      <div className={s.userAvatar}>
        <img
          src={profile.photos.large || defaultAvatar}
          alt="large"/>
      </div>
      <div className={s.userInfo}>

        <div>
          <ProfileData profile={profile} isOwner={isOwner}/>
        </div>

        <div className={s.userStatus}>
          {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
          <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;