import React, { useContext, useState } from "react";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";
import "./App.css";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/AuthContext";

const PAGES = {
  login: Login,
  registration: Registration,
  map: Map,
  profile: Profile,
};

const App = () => {
  const [CurPageObj, setCurPageObj] = useState({ curPage: "login" });

  const authData = useContext(AuthContext);
  const { isLoggedIn } = authData;

  const navigateTo = (page) => {
    //для страницы регистрации не требуется логина
    if (isLoggedIn || page === "registration") {
      setCurPageObj({ curPage: page });
    } else {
      setCurPageObj({ curPage: "login" });
    }
  };

  const Page = PAGES[CurPageObj.curPage];
  return (
    <>
      <main>
        <section>
          <Page navigateTo={navigateTo} />
        </section>
      </main>
    </>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  // logIn: PropTypes.func,
  // logOut: PropTypes.func,
};

export default App;
