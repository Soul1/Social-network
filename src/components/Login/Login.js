import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'login'} placeholder={"Email"} component={"input"}/>
      </div>

      <div>
        <Field name={'password'} placeholder={"Password"} component={"input"}/>
      </div>

      <div>
        <Field component={"input"} name={'rememberMe'} type={'checkbox'}/>remember me
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

  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};
export default Login