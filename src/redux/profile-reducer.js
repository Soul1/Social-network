import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';

let initialState = {
  posts: [
    {id: 1, message: 'dsds', likesCount: 2},
    {id: 2, message: 'dstrs', likesCount: 5},
    {id: 3, message: 'dsdtrs', likesCount: 6}
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy
    }

    case  UPDATE_NEW_POST_TEXT:
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;

    case  SET_USERS_PROFILE: {
      return {...state, profile: action.profile};
    }
    default:
      return state
  }


}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile})

export const getUser = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data))
      })
  }
}

export default profileReducer