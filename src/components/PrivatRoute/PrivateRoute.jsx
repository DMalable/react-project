import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";



const PrivateRoute = ({
  component: RouteComponent,
  isLoggedIn,
  ...rest
}) => {
  // const authData = useContext(AuthContext);
  // const { logIn, isLoggedIn } = authData;
  console.log(isLoggedIn)
  return (
    <Route
      {...rest}
      render={routeProps =>
        isLoggedIn ? (
          <RouteComponent {...routeProps} />
        ) : (
          < Redirect to="/" />)
      }
    />
  )
}


export default PrivateRoute;
