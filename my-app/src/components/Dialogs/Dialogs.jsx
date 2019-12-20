import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.users.map(d => <DialogItem name={d.name} id={d.id} avatarImg={d.avatarImg}/>);

    let messangesElements = props.state.messanges.map( m => <Message message={m.message} id={m.id}/>)

    return (

        <div className={classes.dialogs}>

            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={classes.messanges}>
                {messangesElements}
            </div>

        </div>
    );
};
export default Dialogs