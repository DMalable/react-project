import React from "react";
import { Link, useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Input, InputLabel, FormLabel } from "@material-ui/core";
import { authenticate, getCard } from "../../actions/actions";

const Login = (props) => {

  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;

    props.authenticate(email.value, password.value);
  };

  let history = useHistory();

  if (props.isLoggedIn) {
    history.push("/map");
    props.getCard(props.token);
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
  isLoggedIn: PropTypes.bool.isRequired,
  authenticate: PropTypes.func.isRequired,
};

export const LoginWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn, token: state.auth.token }),
  { authenticate, getCard }
)(Login);