import {authAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'auth/SET-USERS-DATA';
const GET_CAPTCHA_SUCCESS = 'auth/GET-CAPTCHA-SUCCESS';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USERS_DATA:
      return {...state, ...action.data};

    case GET_CAPTCHA_SUCCESS:
      return {...state, captchaUrl: action.captchaUrl};

    default:
      return state
  }

};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USERS_DATA,
  data: {userId, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_SUCCESS,
  captchaUrl,
});

export const auth = () => async (dispatch) => {
  let response = await authAPI.authMe();
  if (response.resultCode === 0) {
    let {id, email, login} = response.data;
    dispatch(setAuthUserData(id, email, login, true))
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.data.resultCode === 0) {
    dispatch(auth())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptcha())
    }
    let message = response.data.messages.length > 0 ?
      response.data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', {_error: message}))
  }
};

  export const getCaptcha = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))

  };


  export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  };


  export default authReducer