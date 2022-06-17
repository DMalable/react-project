import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ProfileWithConnect } from "./Profile";

describe("Profile", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: false } }),
      subscribe: () => { },
      dispatch: () => { },
    };
    const history = createMemoryHistory();
    const { container, getByLabelText } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Router history={history}>
          <Provider store={mockStore}>
            <ProfileWithConnect />
          </Provider>
        </Router>
      </MuiPickersUtilsProvider>

    );
    expect(container.innerHTML).toMatch("Профиль");
    expect(getByLabelText("Имя владельца")).toHaveAttribute("name", "cardholder");
    expect(getByLabelText("Номер карты")).toHaveAttribute("name", "cardNumber");
    expect(getByLabelText("CVC")).toHaveAttribute("name", "cvc");
  });
});