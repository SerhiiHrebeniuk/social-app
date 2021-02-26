// import React from "react";
import { connect } from "react-redux";
// import StoreContext from "../../../StoreContext";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";

// function MyPostsContainer() {

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let handleAddPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             handleAddPost={handleAddPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
          dispatch(action);
    },
    handleAddPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
