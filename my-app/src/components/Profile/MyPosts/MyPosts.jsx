import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Post message={p.message} like={p.likesCount} id={p.id}/> )

  return (
    <div>
      <textarea className={classes.textarea} required></textarea>
      <button className={classes.button} type='submit'>Add post</button>
      <div>
        news
        </div>
      <div className={classes.posts}>
          {postsElements}
      </div>
    </div>
  );
}


export default MyPosts;