import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../redux/Reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'

const LoginForm = ({handleSubmit, error}) => {

  return (
    <form onSubmit={handleSubmit}>
        {createField(
          "Email", 'email',
          Input, [required], 'email')}
        {createField(
          "Password", 'password',
          Input, [required], 'password')}
        {createField(
          "", 'rememberMe',
          Input, [], 'checkbox', 'remember me')}
      {error && <div className={s.formSummaryErr}>{error}</div>}
      <div>
        <button className={s.button}>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login, isAuth}) => {
  const onSubmit = (fd) => {
    login(fd.email, fd.password, fd.rememberMe)
  };

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }

  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login, logout})(Login)