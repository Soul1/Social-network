import React from "react";
import s from "./users.module.css";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: 'Andrew',
                status: 'nice',
                location: {
                    city: 'Moscow',
                    country: 'Russia',
                },
                avatarImg: "https://yt3.ggpht.com/a/AGF-l79jumzWXdhTthIfLt_Rnrk6tSTqpgFGi2-hcw=s100-c-k-c0xffffffff-no-rj-mo",
            },
            {
                id: 2,
                followed: true,
                fullName: 'Dmitry',
                status: 'yo',
                location: {
                    city: 'Kazan',
                    country: 'Russia',
                },
                avatarImg: "https://yt3.ggpht.com/a/AGF-l79jumzWXdhTthIfLt_Rnrk6tSTqpgFGi2-hcw=s100-c-k-c0xffffffff-no-rj-mo",
            },
            {
                id: 3,
                followed: false,
                fullName: 'Sasha',
                status: 'yee',
                location: {
                    city: 'SPB',
                    country: 'Russia',
                },
                avatarImg: "https://yt3.ggpht.com/a/AGF-l79jumzWXdhTthIfLt_Rnrk6tSTqpgFGi2-hcw=s100-c-k-c0xffffffff-no-rj-mo",
            },
        ])
    }

    return (
        <div className={s.inner}>
            {
                props.users.map(u => <div key={u.id} className={s.user}>

                    <div className={s.userInfo}>
                        <div className={s.img}>
                            <img src={u.avatarImg} alt="Users avatar"/>
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
                            <h3>{u.fullName}</h3>
                            <p>{u.status}</p>
                        </div>
                        <div className={s.location}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    )
}

export default Users;