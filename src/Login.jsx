import React from "react";
import { Button, Input, InputLabel, FormLabel } from "@material-ui/core";
import PropTypes from "prop-types";

class Login extends React.Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <div className="login">
        <div className="login__modal">
          <form className="login__form">
            <FormLabel>Войти</FormLabel>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" name="email" />
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input id="password" type="password" name="password" variant="contained" color="primary" />
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
              color="primary"
            >
              <span style={{ color: "black" }}>Новый пользователь?</span>Регистрация
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  navigateTo: PropTypes.func,
};

export { Login };
