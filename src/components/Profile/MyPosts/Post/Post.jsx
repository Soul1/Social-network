import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://static.wixstatic.com/media/60a4cc_7cd4ab091bc442f699f05caf5269f937~mv2_d_2083_2083_s_2.png/v1/fit/w_1024,h_1024,al_c,q_80/file.png' />
      {props.message}
      <div>
        {props.like}
        <span> Like</span>
      </div>
    </div>
  );
}


export default Post;