import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../redux/Reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'email'} placeholder={"Email"}
               type='email'
               component={Input} validate={[required]}/>
      </div>

      <div>
        <Field name={'password'} placeholder={"Password"}
               type='password'
               component={Input} validate={[required]}/>
      </div>

      <div>
        <Field className={s.input} component={Input} name={'rememberMe'}
               type={'checkbox'}/>
               <span>remember me</span>
      </div>
      {props.error && <div className={s.formSummaryErr}>{props.error}</div>}
      <div>
        <button className={s.button}>Login</button>
      </div>
    </form>
  )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (fd) =>{
    props.login(fd.email, fd.password, fd.rememberMe)
  };

  if(props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <div className={s.login}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

const mapStateToProps = (state) =>({

  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login)