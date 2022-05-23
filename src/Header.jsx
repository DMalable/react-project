import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import logo from "./logo.png";

class Header extends React.Component {
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
              <Button
                className="header-button"
                onClick={() => {
                  navigateTo("login");
                }}
                color="secondary"
              >
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
};

export { Header };
