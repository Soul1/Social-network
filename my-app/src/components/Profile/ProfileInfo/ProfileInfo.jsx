import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileBanner = (props) => {
    return (
        <img src={props.imgSrc} alt=''></img>
    )
}

const UserInfo = (props) => {
    return (
        <div>avatar + user-info</div>
    )
}

const ProfileInfo = () => {
    return (
        <div className={classes.contentWrapper}>

            <ProfileBanner imgSrc='https://www.tokkoro.com/picsup/5552616-real-world-wallpapers.jpg'/>

            <div className={classes.userInfo}>
                <UserInfo/>
            </div>

        </div>

    );
}


export default ProfileInfo;