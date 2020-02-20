import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.users.map(d => <DialogItem name={d.name} id={d.id} avatarImg={d.avatarImg}/>);

    let messagesElements = state.messanges.map(m => <Message message={m.message} id={m.id}/>)

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (

        <div className={classes.dialogs}>

            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={classes.messanges}>
                <div>{messagesElements}</div>
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange}/>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    );
};
export default Dialogs