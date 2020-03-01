import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

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
        <Field component={Input} name={'rememberMe'}
               type={'checkbox'}/>remember me
      </div>
      <div>
        <button>Login</button>
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
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};

const mapStateToProps = (state) =>({

  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login)