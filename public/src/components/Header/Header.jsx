import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

  return(
  <header className={s.header}>
    <img src='https://www.seoclerk.com/pics/309849-1YYJWA1419839518.png' alt=''></img>
    <div className={s.loginBlock}>
      {props.isAuth ?
        <button onClick={props.logout}>Logout</button>
        : <NavLink to={'/login'}>Login</NavLink>}

    </div>
  </header>
  );
}


export default Header;