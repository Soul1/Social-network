import React from "react";
import s from "./users.module.css";
import defaultAvatar from './../../assets/image/user.jpg'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


const User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div className={s.inner}>
      
        <div className={s.user}>

          <div className={s.userInfo}>
            <div className={s.img}>
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ?
                  user.photos.small
                  : defaultAvatar} alt="Users avatar"/>
              </NavLink>
            </div>
            <div>
              {user.followed ?
                <button disabled={followingInProgress.some(id => id === user.id)}

                        onClick={() => unfollow(user.id)}

                        className={s.btn}>Unfollow</button>

                : <button disabled={followingInProgress.some(id => id === user.id)}

                          onClick={() => follow(user.id)}

                          className={s.btn}>Follow</button>
              }

            </div>
          </div>

          <div className={s.wrapper}>
            <div className={s.info}>
              <h3>{user.name}</h3>
              <p>{user.status ? user.status : "Нет статуса"}</p>
            </div>
            <div className={s.location}>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </div>
          </div>
        </div>
    </div>
  )
}


export default User;