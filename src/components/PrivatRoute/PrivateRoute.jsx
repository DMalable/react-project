import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";




const PrivateRoute = connect((state) => ({
  isLoggedIn: state.auth.isLoggedIn,
}))(({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={routeProps =>
      isLoggedIn ? (
        <Component {...routeProps} />
      ) : (
        < Redirect to="/" />)
    }
  />
)
)

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default PrivateRoute;
