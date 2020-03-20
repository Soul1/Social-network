import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USERS_PROFILE = 'profile/SET-USERS-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const SET_PHOTO = 'profile/SET-PHOTO';

let initialState = {
  posts: [
    {id: 1, message: 'dsds', likesCount: 2},
    {id: 2, message: 'dstrs', likesCount: 5},
    {id: 3, message: 'dsdtrs', likesCount: 6}
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let body = action.newPostBody;
      return {
        ...state,
        posts: [...state.posts, {id: 4, message: body,likesCount: 0,}],
      };
    }

    case  SET_USERS_PROFILE: {
      return {...state, profile: action.profile};
    }
    case  SET_STATUS: {
      return {...state, status: action.status};
    }
    case  DELETE_POST: {
      return {...state, posts: state.posts.filter(p => p.id != action.postId)};
    }
    case  SET_PHOTO: {
      return {...state, profile: {...state.profile, photos: action.photos}};
    }

    default:
      return state
  }


};
//------------------------------------------------------------------
export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
export const saveUserPhoto = (photos) => ({type: SET_PHOTO, photos});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
//------------------------------------------------------------------
export const getUser = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data))
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response.data))
};
export const updateStatus = (status) => async (dispatch) => {
  await profileAPI.updateStatus(status);
  dispatch(setUserStatus(status))
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(saveUserPhoto(response.data.photos))
  }


};

export default profileReducer