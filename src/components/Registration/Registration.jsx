import React from "react";
import { Button, Input, InputLabel, FormLabel } from "@material-ui/core";
import PropTypes from "prop-types";

const Registration = (props) => {
  const { navigateTo } = props;

  const registrate = (event) => {
    event.preventDefault();
    const { email, name, password } = event.target;
    //регистрация
    fetch("https://loft-taxi.glitch.me/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value, name: name.value, surname: "-" }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="registration">
      <div className="registration__modal">
        <form className="registration__form" onSubmit={registrate}>
          <FormLabel>Регистрация</FormLabel>
          <InputLabel htmlFor="email">Email*</InputLabel>
          <Input id="email" type="email" name="email" required />
          <InputLabel htmlFor="name">Как вас зовут?*</InputLabel>
          <Input id="name" type="text" name="name" required />
          <InputLabel htmlFor="password">Придумайте пароль*</InputLabel>
          <Input id="password" type="password" name="password" required />
          <Button data-testid="submit" type="submit" variant="contained" color="primary">
            Зарегистрироваться
          </Button>
          <Button
            onClick={() => {
              navigateTo("login");
            }}
            color="primary"
          >
            <span style={{ color: "black" }}>Уже зарегистрированы?</span>Войти
          </Button>
        </form>
      </div>
    </div>
  );
};

Registration.propTypes = {
  navigateTo: PropTypes.func.isRequired,
};

export default Registration;
