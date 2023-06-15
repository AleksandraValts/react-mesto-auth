import headerLogo from '../images/Logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Место" />  
        <Link to="/sign-in" className="header__login">Войти</Link>
        <Link to="/sign-up" className="header__login">Регистрация</Link>
    </header>
  );
}

export default Header;