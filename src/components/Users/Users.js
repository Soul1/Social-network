import React from "react";
import s from "./users.module.css";
import defaultAvatar from './../../assets/image/user.jpg'
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (

        <div className={s.inner}>
            <div className={s.paginate}>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && s.selectedPage || s.selectPage}
                        onClick={() => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id} className={s.user}>

                    <div className={s.userInfo}>
                        <div className={s.img}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ?
                                    u.photos.small
                                    : defaultAvatar} alt="Users avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}
                                        className={s.btn}>Follow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}
                                          className={s.btn}>Unfollow</button>}

                        </div>
                    </div>

                    <div className={s.wrapper}>
                        <div className={s.info}>
                            <h3>{u.name}</h3>
                            <p>{u.status ? u.status : "Нет статуса"}</p>
                        </div>
                        <div className={s.location}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}


export default Users;