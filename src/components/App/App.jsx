import React, { useContext, useState } from "react";
import Login from "../Login/Login";
import { Registration } from "../Registration/Registration";
import { Map } from "../Map/Map";
import { Profile } from "../Profile/Profile";
import "./App.css";
// import { withAuth } from "../../contexts/AuthContext";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/AuthContext";

const PAGES = {
  login: Login,
  registration: Registration,
  map: Map,
  profile: Profile,
};

const App = () => {
  // state = { curPage: "login" }; ///??????
  const [CurPageObj, setCurPageObj] = useState({ curPage: "login" });

  const authData = useContext(AuthContext);
  const { isLoggedIn } = authData;

  const navigateTo = (page) => {
    //для страницы регистрации не требуется логина
    if (isLoggedIn || page === "registration") {
      // this.setState({ curPage: page }); ///???????????
      setCurPageObj({ curPage: page });
    } else {
      // this.setState({ curPage: "login" }); ///???????????
      setCurPageObj({ curPage: "login" });
    }
  };

  // const Page = PAGES[state.curPage];
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

// export default withAuth(App);
export default App;
