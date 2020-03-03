import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validator";

const maxLength50 =  maxLengthCreator(50)

const MyPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength50]}
        name={"addNewPostBody"}
        className={classes.textarea} />
      <button className={classes.button}>Add post</button>
    </form>
  )
}

const MyPostReduxForm = reduxForm({form: 'post'})(MyPostForm)

const MyPosts = React.memo(props => {
  let postsElements = props.posts
    .map(p => <Post message={p.message} like={p.likesCount} id={p.id}/>)

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
});


export default MyPosts;