import "@fontsource/roboto";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "loft-taxi-mui-theme";
import { AuthProvider } from "./AuthContext";

const ExtendedTheme = createTheme(theme, {
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      containedPrimary: {
        fontSize: "25px",
        backgroundColor: "#ffc617",
        borderRadius: "60px",
        "&:focus": {
          boxShadow: "none",
        },
        "&:hover": {
          backgroundColor: "#FFA842",
          boxShadow: "none",
        },
      },
      textPrimary: {
        borderRadius: "20px",
        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
      textSecondary: {
        borderRadius: "20px",
        color: "white",
        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "#ffc617",
        },
      },
    },
    MuiInput: {
      root: {
        display: "block",
        marginBottom: "25px",
      },
    },
    MuiFormLabel: {
      root: {
        color: "black",
        fontSize: "30px",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "60px",
      },
    },
    MuiInputLabel: {
      root: {
        color: "black",
        fontSize: "16px",
        fontWeight: "600",
        textAlign: "left",
        marginBottom: "15px",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={ExtendedTheme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
