import React, { Component } from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import logo from "./../../logo.png";
import { withAuth } from "../../contexts/AuthContext";

class Header extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigateTo("login");
  };

  render() {
    const { navigateTo } = this.props;

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
              <Button className="header-button" onClick={this.unauthenticate} color="secondary">
                Выйти
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  navigateTo: PropTypes.func,
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
};

// export { Header };

export const HeaderWithAuth = withAuth(Header);
