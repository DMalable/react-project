import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const logIn = (result) => {
    if (!result.success || !result.token) {
      return;
    }
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  return <AuthContext.Provider value={{ logIn, logOut, isLoggedIn }}>{children}</AuthContext.Provider>;
};
