import React, { useContext } from "react";
import { Button, Input, InputLabel, FormLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useHistory } from 'react-router-dom';


const Login = () => {
  const authData = useContext(AuthContext);
  const { logIn, isLoggedIn } = authData;

  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    //виды запросов
    //получить список адресов
    // fetch("https://loft-taxi.glitch.me/addressList")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    //получить маршрут
    // fetch("https://loft-taxi.glitch.me/route?address1=Эрмитаж&address2=Пулково (LED)")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    //получить данные карты
    // fetch("https://loft-taxi.glitch.me/card?token=AUTH_TOKEN")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    //регистрация
    // fetch("https://loft-taxi.glitch.me/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email: "email@example.com", password: "password", name: "Name", surname: "Surname" }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result));

    //логин
    fetch("https://loft-taxi.glitch.me/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value }),
    })
      .then((response) => response.json())
      .then((result) => logIn(result));
  };

  let history = useHistory();

  if (isLoggedIn) {
    history.push("/map");
  } else {
    return (
      <div className="login">
        <div className="login__modal">
          <form className="login__form" onSubmit={authenticate}>
            <FormLabel>Войти</FormLabel>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" name="email" required />
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input id="password" type="password" name="password" variant="contained" color="primary" required />
            <Button data-testid="submit" type="submit" variant="contained" color="primary">
              Воити
            </Button>
            <div className="login__form-link">Новый пользователь?<Link className="link" to='/registration'>Регистрация</Link></div>
          </form>
        </div>
      </div>
    );
  }
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  // logOut: PropTypes.func,
};

export default Login;
