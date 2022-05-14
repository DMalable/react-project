import React from "react";
import { Login } from "./Login";
import { Registration } from "./Registration";
import { Map } from "./Map";
import { Profile } from "./Profile";
import "./App.css";

const PAGES = {
  login: Login,
  registration: Registration,
  map: Map,
  profile: Profile,
};

class App extends React.Component {
  state = { curPage: "login" };

  navigateTo = (page) => {
    this.setState({ curPage: page });
  };

  render() {
    const Page = PAGES[this.state.curPage];
    return (
      <>
        <main>
          <section>
            {/* <{PAGES[this.state.curPage]} navigateTo = {this.navigateTo}/> */}
            <Page navigateTo={this.navigateTo} />
          </section>
        </main>
      </>
    );
  }
}

export default App;
