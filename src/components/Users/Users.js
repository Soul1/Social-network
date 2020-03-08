import React from "react";
import s from "./users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


const Users = (props) => {

  return (

    <div className={s.inner}>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      {
        props.users.map(u => <User
          key={u.id}
          user={u}
          follow={props.follow}
          unfollow={props.unfollow}
          followingInProgress={props.followingInProgress}
        />)
      }
    </div>
  )
}


export default Users;