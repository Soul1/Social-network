import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Prealoader/Preloader";


const Profile = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div className={classes.content}>

      <ProfileInfo profile={props.profile}
                   isOwner={props.isOwner}
                   status={props.status}
                   savePhoto={props.savePhoto}
                   updateStatus={props.updateStatus}/>

      <MyPostsContainer/>

    </div>

  );
}


export default Profile;