import React from "react";
import { LoginWithConnect } from "../Login/Login";
import { RegistrationWithConnect } from "../Registration/Registration";
import { MapWithConnect } from "../Map/Map";
import { ProfileWithConnect } from "../Profile/Profile";
import "./App.css";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from "../PrivatRoute/PrivateRoute";
// import RouteComponent from "../Profile/Profile";
import { connect } from "react-redux";


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

