import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="login">
      <form className="login__form" name="register">
        <h2 className="login__title">Регистрация</h2>
        <input className="login__input" type="email" name="email" 
        id="register-email" placeholder="Email" required />
        <input className="login__input" type="password" name="password"
        id="register-password" placeholder="Пароль" required />
        <button className="login__button" type="submit">"Зарегистрироваться"</button>
      </form>
      <Link exact to="/sign-in" className="login__link">Уже зарегистрированы? Войти</Link>
    </section>
  );
}

export default Register;