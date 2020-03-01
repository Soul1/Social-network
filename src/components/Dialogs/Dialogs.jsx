import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const addMessageForm = (props) => {

  return (
    <form  onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={"newMessageBody"}/>
      <button>Send</button>
    </form>
  )
};

const MessageReduxForm = reduxForm({form: "message"})(addMessageForm)

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.users.map(d => <DialogItem name={d.name} id={d.id} avatarImg={d.avatarImg}/>);

  let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>
        {dialogsElements}
      </div>
      <div className={classes.messanges}>
        <div>{messagesElements}</div>

        <MessageReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

export default Dialogs