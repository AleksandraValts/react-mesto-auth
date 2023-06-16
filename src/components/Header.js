import headerLogo from '../images/Logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Место" />  
        <Link to="/sign-in" className="header__login">Войти</Link>
        <Link to="/sign-up" className="header__login">Регистрация</Link>
        <ul className="header__login-page">
          <li className="header___list">
            <p className="header__text">{props.headerEmail}</p>
          </li>
          <li className="header___list">
            <Link to="/sign-in" className="header__login header__exit" onClick={props.onExit}>Выйти</Link>
          </li>
        </ul>
    </header>
  );
}

export default Header;