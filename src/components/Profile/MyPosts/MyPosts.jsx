import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id}/>)


    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
      <textarea onChange={onPostChange}
                ref={newPostElement}
                className={classes.textarea} required
                value={props.newPostText}/>
            <button onClick={addPost} className={classes.button}>Add post</button>

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