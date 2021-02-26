import React from "react";
import style from "./MyPosts.module.css";

import Post from "./Post/Post";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../redux/ProfileReducer";



function MyPosts(props) {

  let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} likesCount={post.likesCount}  />);

  let newPostElement = React.createRef();

  let handleAddPost = () => {
    props.handleAddPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={style.postsBlock}> 
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={handleAddPost} >Add Post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
