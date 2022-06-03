import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";



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


export default PrivateRoute;
