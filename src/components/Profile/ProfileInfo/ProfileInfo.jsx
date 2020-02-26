import React from 'react';
import s from './ProfileInfo.module.css';
import defaultAvatar from '../../../assets/image/userLarge.jpg'

const ProfileInfo = (props) => {

    return (
        <div className={s.wrapper}>
            <div className={s.background}>
                <img
                    src='https://www.tokkoro.com/picsup/5552616-real-world-wallpapers.jpg'
                    alt='444'/>
            </div>

            <div className={s.user}>
                <div className={s.userAvatar}>
                    <img
                        src={props.profile.photos.large ? props.profile.photos.large :defaultAvatar}
                        alt="large"/>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userName}>{props.profile.fullName}</div>
                    <div className={s.userStatus}>
                        Status: {props.profile.aboutMe ? props.profile.aboutMe: 'Нет статуса'}
                    </div>
                </div>
            </div>

        </div>
    );

}


export default ProfileInfo;