import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.users.map(d => <DialogItem name={d.name} id={d.id} avatarImg={d.avatarImg}/>);

    let messangesElements = props.state.messanges.map(m => <Message message={m.message} id={m.id}/>)

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        // props.addMessage.text
    }
    return (

        <div className={classes.dialogs}>

            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={classes.messanges}>
                {messangesElements}
                <div>
                    <textarea ref={newMessage}></textarea>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>

        </div>
    );
};
export default Dialogs