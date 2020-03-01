import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";


const MyPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={'textarea'}
        name={"addNewPostBody"}
        className={classes.textarea} required/>
      <button className={classes.button}>Add post</button>
    </form>
  )
}

const MyPostReduxForm = reduxForm({form: 'post'})(MyPostForm)

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id}/>)

  const addNewPost = (values) => [
    props.addPost(values.addNewPostBody)
  ]

  return (
    <div>
      <MyPostReduxForm onSubmit={addNewPost}/>

      <div className={classes.posts}>
        <div>
          news
        </div>
        {postsElements}
      </div>
    </div>
  );
}


export default MyPosts;