import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id}/>)


    let newPostElement = React.createRef();


    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
      <textarea onChange={onPostChange}
                ref={newPostElement}
                className={classes.textarea} required
                value={props.newPostText}/>
            <button onClick={onAddPost} className={classes.button}>Add post</button>

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