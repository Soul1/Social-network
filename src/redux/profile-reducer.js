import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'dsds', likesCount: 2},
    {id: 2, message: 'dstrs', likesCount: 5},
    {id: 3, message: 'dsdtrs', likesCount: 6}
  ],
  profile: null,
  status: ''
}

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
    default:
      return state
  }


}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})

export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_STATUS, status})

export const getUser = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data))
      })
  }
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setUserStatus(response.data))
      })
  }
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setUserStatus(status))
        }
      })
  }
};

export default profileReducer