import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "loft-taxi-mui-theme";

const ExtendedTheme = createTheme(theme, {
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      containedPrimary: {
        backgroundColor: "#ffc617",
        borderRadius: "20px",
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
      },
    },
    MuiInputLabel: {
      root: {
        color: "black",
        fontSize: "16px",
        fontWeight: "600",
        textAlign: "left",
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={ExtendedTheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>
);

/* reportWebVitals(); */
