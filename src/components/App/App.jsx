import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LoginWithConnect } from "../Login/Login";
import { RegistrationWithConnect } from "../Registration/Registration";
import { MapWithConnect } from "../Map/Map";
import { ProfileWithConnect } from "../Profile/Profile";
import PrivateRoute from "../PrivatRoute/PrivateRoute";

const App = () => {
  return (
    <>
      <main>
        <section>
          <Switch>
            <Route exact path='/' component={LoginWithConnect} />
            <Route path='/registration' component={RegistrationWithConnect} />
            <PrivateRoute path='/map' component={MapWithConnect} />
            <PrivateRoute path='/profile' component={ProfileWithConnect} />
            <Redirect to="/" />
          </Switch>
        </section>
      </main>
    </>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);