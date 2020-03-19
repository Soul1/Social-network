import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'SET-USERS-DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USERS_DATA:
      return {...state, ...action.data};

    default:
      return state
  }

};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USERS_DATA,
  data: {userId, email, login, isAuth}
});

export const auth = () => {
  return (dispatch) => {
    return authAPI.authMe()
      .then(data => {
        if (data.resultCode === 0) {
          let {id, email, login} = data.data;
          dispatch(setAuthUserData(id, email, login, true))
        }
      })
  }
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(auth())
        } else {
          let message = response.data.messages.length > 0 ?
            response.data.messages[0] : 'Some error';
          dispatch(stopSubmit('login', {_error: message}))
        }
      })
  }
};

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
};


export default authReducer