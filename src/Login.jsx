import React from "react";

class Login extends React.Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <>
        <form>
          <h3>Войти</h3>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
          <label htmlFor="password">Пароль</label>
          <input id="password" type="password" name="password" />
          <button
            onClick={() => {
              navigateTo("map");
            }}
          >
            Воити
          </button>
          <button
            onClick={() => {
              navigateTo("registration");
            }}
          >
            Регистрация
          </button>
        </form>
      </>
    );
  }
}

export { Login };
