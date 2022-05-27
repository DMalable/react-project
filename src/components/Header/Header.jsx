import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import logo from "./../../logo.png";
import { AuthContext } from "../../contexts/AuthContext";

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
        <ul>
          <li>
            <Button
              onClick={() => {
                navigateTo("map");
              }}
              color="secondary"
              className="header-button"
            >
              Карта
            </Button>
          </li>
          <li>
            <Button
              className="header-button"
              onClick={() => {
                navigateTo("profile");
              }}
              color="secondary"
            >
              Профиль
            </Button>
          </li>
          <li>
            <Button className="header-button" onClick={unauthenticate} color="secondary">
              Выйти
            </Button>
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
