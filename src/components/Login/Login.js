import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'login'} placeholder={"Email" +
        ""} component={Input} validate={[required]}/>
      </div>

      <div>
        <Field name={'password'} placeholder={"Password" +
        ""} component={Input} validate={[required]}/>
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

  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
};
export default Login