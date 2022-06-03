import React, { useContext } from "react";
import PropTypes from "prop-types";
import logo from "./../../logo.png";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { logOut } from "../../actions/actions";




const Header = (props) => {

  const unauthenticate = (event) => {
    event.preventDefault();
    props.logOut();
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
            <Link className="link header-link" onClick={unauthenticate} >Выйти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  // navigateTo: PropTypes.func.isRequired,
  logOut: PropTypes.func,
  // isLoggedIn: PropTypes.bool.isRequired,
  // logIn: PropTypes.func.isRequired,
};

export const HeaderWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { logOut }
)(Header);

