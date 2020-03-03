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
                   status={props.status}
                   updateStatus={props.updateStatus}/>

      <MyPostsContainer/>

    </div>

  );
}


export default Profile;