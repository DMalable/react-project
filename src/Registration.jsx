import React from "react";
import { Button, Input } from "@material-ui/core";

class Registration extends React.Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <>
        <form>
          <h3>Регистрация</h3>
          <label htmlFor="email">Email*</label>
          <Input id="email" type="email" name="email" />
          <label htmlFor="name">Как вас зовут?*</label>
          <Input id="name" type="text" name="name" />
          <label htmlFor="password">Придумайте пароль*</label>
          <Input id="password" type="password" name="password" />
          <Button
            onClick={() => {
              navigateTo("map");
            }}
          >
            Зарегистрироваться
          </Button>
          <Button
            onClick={() => {
              navigateTo("map");
            }}
          >
            Войти
          </Button>
        </form>
      </>
    );
  }
}

export { Registration };
