import React, { Component } from "react";
import { Button, Input, InputLabel, FormLabel } from "@material-ui/core";
import PropTypes from "prop-types";

class Registration extends Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <div className="registration">
        <div className="registration__modal">
          <form className="registration__form">
            <FormLabel>Регистрация</FormLabel>
            <InputLabel htmlFor="email">Email*</InputLabel>
            <Input id="email" type="email" name="email" />
            <InputLabel htmlFor="name">Как вас зовут?*</InputLabel>
            <Input id="name" type="text" name="name" />
            <InputLabel htmlFor="password">Придумайте пароль*</InputLabel>
            <Input id="password" type="password" name="password" />
            <Button
              onClick={() => {
                navigateTo("map");
              }}
              variant="contained"
              color="primary"
            >
              Зарегистрироваться
            </Button>
            <Button
              onClick={() => {
                navigateTo("map");
              }}
              color="primary"
            >
              <span style={{ color: "black" }}>Уже зарегистрированы?</span>Войти
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  navigateTo: PropTypes.func,
};

export { Registration };
