const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";


let initialState = {
    posts: [
        { id: "1", message: "Hi, how are you?", likesCount: 12 },
        { id: "2", message: "It`s my first post", likesCount: 10 },
      ],
      newPostText: "it React",
      profile: null
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            // let stateCopy = 
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: " ",
            };
            // stateCopy.posts = [...state.posts];
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = " ";
            // return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {

            // let stateCopy = 
            return {
                ...state,
                newPostText: action.newText,
            };
            // stateCopy.newPostText = action.newText;
            // return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {
                ...state, 
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;