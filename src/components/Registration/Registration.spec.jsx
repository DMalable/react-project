import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import { RegistrationWithConnect } from "./Registration";

describe("Registration", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: false } }),
      subscribe: () => { },
      dispatch: () => { },
    };
    const history = createMemoryHistory();
    const { container, getByLabelText } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <RegistrationWithConnect />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch("Регистрация");
    expect(getByLabelText("Email*")).toHaveAttribute("name", "email");
    expect(getByLabelText("Как вас зовут?*")).toHaveAttribute("name", "name");
    expect(getByLabelText("Придумайте пароль*")).toHaveAttribute("name", "password");
  });
});