import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <NavLink to={path} className={s.dialog}>
            <img src={props.avatarImg} /> <div className={s.name}>{props.name}</div>
        </NavLink>
    )
};

export default DialogItem