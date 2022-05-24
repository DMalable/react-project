import React from "react";
import { LoginWithAuth } from "./Login";
// import { Login } from "./Login";
import { Registration } from "./Registration";
import { Map } from "./Map";
import { Profile } from "./Profile";
import "./App.css";
import { withAuth } from "./AuthContext";
import PropTypes from "prop-types";

const PAGES = {
  login: LoginWithAuth,
  registration: Registration,
  map: Map,
  profile: Profile,
};

class App extends React.Component {
  state = { curPage: "login" };

  navigateTo = (page) => {
    //для страницы регистрации не требуется логина
    if (this.props.isLoggedIn || page === "registration") {
      this.setState({ curPage: page });
    } else {
      this.setState({ curPage: "login" });
    }
  };

  render() {
    const Page = PAGES[this.state.curPage];
    return (
      <>
        <main>
          <section>
            <Page navigateTo={this.navigateTo} />
          </section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
};

export default withAuth(App);
// export default App;
