import React from "react";
import s from './FormsControls.module.css'
import {Field} from "redux-form";

const FormControl = ({meta: {touched,error}, children}) => {
  const hasError = touched && error;

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
};

export const Textarea = (props) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props) => {
  const {input, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

export const createField = (placeholder, name,
                            component, validate,
                            type = '', text = '', value='') => (
  <div>
    {text}
    <Field
      name={name} placeholder={placeholder}
      type={type}
      component={component} validate={validate}
      value={value}
    />
  </div>);