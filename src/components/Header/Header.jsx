import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import logo from "./../../logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from 'react-router-dom';


const Header = (props) => {
  const { navigateTo } = props;
  const authData = useContext(AuthContext);
  const { logOut } = authData;

  const unauthenticate = () => {
    logOut();
    navigateTo("login");
  };

  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header-logo"></img>
      <nav>
        <ul className="header-list">
          <li className="header-item">
            <Link className="link header-link" to='/map'>Карта</Link>
          </li>
          <li className="header-item">
            <Link className="link header-link" to='/profile'>Профиль</Link>
          </li>
          <li className="header-item">
            <Link className="link header-link" to='/'>Выйти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  logOut: PropTypes.func,
  // isLoggedIn: PropTypes.bool.isRequired,
  // logIn: PropTypes.func.isRequired,
};

export default Header;
