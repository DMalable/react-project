import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Input, InputLabel, FormLabel } from "@material-ui/core";
import { authenticate } from "../../actions/actions";
import { useForm, Controller } from "react-hook-form";

const LoginForm = (props) => {

  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });
  const onSubmit = data => {
    const { email, password } = data;
    console.log({ errors });
    props.authenticate(email, password);
  }
  // const authenticate = (event) => {
  //   event.preventDefault();
  //   const { email, password } = event.target;

  //   props.authenticate(email.value, password.value);
  // };

  return (
    // <form className="login__form" onSubmit={authenticate}>
    <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
      <FormLabel>Войти</FormLabel>
      <InputLabel htmlFor="email">Email</InputLabel>
      {/* <Input inputRef={register} id="email" type="email" name="email" required /> */}
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Input {...field} id="email" type="email" name="email" />}
      />
      <div className="login__error-text"> {errors.email?.type === 'required' && "поле email необходимо заполнить"}</div>
      <InputLabel htmlFor="password">Пароль</InputLabel>
      {/* <Input id="password" type="password" name="password" variant="contained" color="primary" required /> */}
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Input {...field} id="password" type="password" name="password" variant="contained" color="primary" />}
      />
      <div className="login__error-text"> {errors.password?.type === 'required' && "поле пароль необходимо заполнить"}</div>
      <Button data-testid="submit" type="submit" variant="contained" color="primary">
        Воити
      </Button>
      <div className="login__form-link">Новый пользователь?<Link className="link" to='/registration'>Регистрация</Link></div>
    </form>
  );
};

LoginForm.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  authenticate: PropTypes.func.isRequired,
};

export const LoginFormWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(LoginForm);