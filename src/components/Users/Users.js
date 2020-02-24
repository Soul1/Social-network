import React from "react";
import s from "./users.module.css";
import * as axios from "axios";
import defaultAvatar from './../../assets/image/user.jpg'

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (

            <div className={s.inner}>
                {
                    this.props.users.map(u => <div key={u.id} className={s.user}>

                        <div className={s.userInfo}>
                            <div className={s.img}>
                                <img src={u.photos.small != null ?
                                    u.photos.small
                                    : defaultAvatar} alt="Users avatar"/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}
                                            className={s.btn}>Follow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}
                                              className={s.btn}>Unfollow</button>}

                            </div>
                        </div>

                        <div className={s.wrapper}>
                            <div className={s.info}>
                                <h3>{u.name}</h3>
                                <p>{u.status}</p>
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
}


export default Users;