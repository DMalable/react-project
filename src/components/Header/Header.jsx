import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { logOut } from "../../actions/actions";
import logo from "./../../logo.png";




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
            <Link className="link header-link" to='#' onClick={unauthenticate} >Выйти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
};

export const HeaderWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { logOut }
)(Header);

