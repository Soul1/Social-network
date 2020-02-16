import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <NavLink to={path} className={classes.dialog}><img src={props.avatarImg} /> {props.name}</NavLink>
    )
};

export default DialogItem