import React from 'react';

function Login() {
  return (
    <section className="login">
      <form className="login__form" name="login">
        <h2 className="login__title">Вход</h2>
        <input className="login__input" type="email" name="email"
        id="login-email" placeholder="Email" required />
        <input className="login__input" type="password" name="password"
        id="login-password" placeholder="Пароль" required />
        <button className="login__button" type="submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;