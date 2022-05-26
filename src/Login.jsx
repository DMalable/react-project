import React from "react";
import { Button, Input, InputLabel, FormLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import { withAuth } from "./AuthContext";

class Login extends React.Component {
  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };

  render() {
    const { navigateTo } = this.props;

    if (this.props.isLoggedIn) {
      navigateTo("map");
    } else {
      return (
        <div className="login">
          <div className="login__modal">
            <form className="login__form" onSubmit={this.authenticate}>
              <FormLabel>Войти</FormLabel>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" type="email" name="email" />
              <InputLabel htmlFor="password">Пароль</InputLabel>
              <Input id="password" type="password" name="password" variant="contained" color="primary" />
              <Button data-testid="submit" type="submit" variant="contained" color="primary">
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
}
Login.propTypes = {
  navigateTo: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
};

// export { Login };

export const LoginWithAuth = withAuth(Login);
