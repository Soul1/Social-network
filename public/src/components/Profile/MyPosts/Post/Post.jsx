import React from 'react';
import s from './Post.module.css';
import userAvatar from '../../../../assets/image/user.jpg'

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src={userAvatar}/>
        {props.message}
      </div>
      <div>
        {props.like}
        <span> Like</span>
      </div>
    </div>
  );
}


export default Post;