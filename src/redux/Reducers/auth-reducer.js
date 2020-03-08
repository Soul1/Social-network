import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'auth/SET-USERS-DATA';

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

export const auth = () => async (dispatch) => {
  let response = await authAPI.authMe();
  if (response.resultCode === 0) {
    let {id, email, login} = response.data;
    dispatch(setAuthUserData(id, email, login, true))
  }

};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)
  if (response.resultCode === 0) {
    dispatch(auth())
  } else {
    let message = response.messages.length > 0 ?
      response.messages[0] : 'Some error';
    dispatch(stopSubmit('login', {_error: message}))
  }
};

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
};


export default authReducer