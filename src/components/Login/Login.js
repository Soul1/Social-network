import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../redux/Reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {

  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", 'email',
        Input, [required], 'email')}

      {createField("Password", 'password',
        Input, [required], 'password')}

      {createField("", 'rememberMe',
        Input, [], 'checkbox', 'remember me')}

      {captchaUrl &&
      <div>
        <img src={captchaUrl} alt="captcha"/>
        {createField("Enter this captcha", 'captcha',
          Input, [required], 'text')}
      </div>
      }

      {error && <div className={s.formSummaryErr}>{error}</div>}
      <div>
        <button className={s.button}>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login, isAuth, captchaUrl}) => {
  const onSubmit = (fd) => {
    login(fd.email, fd.password, fd.rememberMe, fd.captcha)
  };

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div>
      <div className={s.free}>
        <div>test login: <h3>free@samuraijs.com</h3></div>
        <div>test password: <h3>free</h3></div>
      </div>
      <div className={s.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login, logout})(Login)