import React from "react";
import logo from "./logo.png";

class Header extends React.Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <header>
        <img src={logo} alt="логотип"></img>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  navigateTo("map");
                }}
              >
                Карта
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigateTo("profile");
                }}
              >
                Профиль
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  navigateTo("login");
                }}
              >
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export { Header };
