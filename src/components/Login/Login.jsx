import React from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LoginFormWithConnect } from "./LoginForm";
import { getCard } from "../../actions/actions";

const Login = (props) => {

  let history = useHistory();

  if (props.isLoggedIn) {
    history.push("/map");
    props.getCard(props.token);
  } else {
    return (
      <div className="login">
        <div className="login__modal">
          <LoginFormWithConnect />
        </div>
      </div>
    );
  }
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export const LoginWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn, token: state.auth.token }),
  { getCard }
)(Login);