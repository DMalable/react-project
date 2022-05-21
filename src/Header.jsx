import React from "react";
import { Button } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";
// import logo from "./logo.png";

class Header extends React.Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <header>
        <Logo />
        {/* <img src={Logo} alt="логотип"></img> */}
        <nav>
          <ul>
            <li>
              <Button
                onClick={() => {
                  navigateTo("map");
                }}
                variant="contained"
                color="primary"
              >
                Карта
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  navigateTo("profile");
                }}
                variant="contained"
                color="primary"
              >
                Профиль
              </Button>
            </li>
            <li>
              <Button
                onClick={() => {
                  navigateTo("login");
                }}
                variant="contained"
                color="primary"
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

export { Header };
