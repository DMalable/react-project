import React from "react";

class Registration extends React.Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <>
        <form>
          <h3>Регистрация</h3>
          <label htmlFor="email">Email*</label>
          <input id="email" type="email" name="email" />
          <label htmlFor="name">Как вас зовут?*</label>
          <input id="name" type="text" name="name" />
          <label htmlFor="password">Придумайте пароль*</label>
          <input id="password" type="password" name="password" />
          <button
            onClick={() => {
              navigateTo("map");
            }}
          >
            Зарегистрироваться
          </button>
          <button
            onClick={() => {
              navigateTo("map");
            }}
          >
            Войти
          </button>
        </form>
      </>
    );
  }
}

export { Registration };
