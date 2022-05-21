import React from "react";
import { Button, Input } from "@material-ui/core";

class Login extends React.Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <>
        <form>
          <h3>Войти</h3>
          <label htmlFor="email">Email</label>
          <Input id="email" type="email" name="email" />
          <label htmlFor="password">Пароль</label>
          <Input id="password" type="password" name="password" />
          <Button
            onClick={() => {
              navigateTo("map");
            }}
            variant="contained"
            color="primary"
          >
            Воити
          </Button>
          <Button
            onClick={() => {
              navigateTo("registration");
            }}
            variant="contained"
            color="primary"
            disableElevation
            style={{ marginLeft: "10px", borderRadius: "100px" }}
          >
            Регистрация
          </Button>
        </form>
      </>
    );
  }
}

export { Login };
