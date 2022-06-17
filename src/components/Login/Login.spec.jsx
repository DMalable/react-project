import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import { LoginWithConnect } from "./Login";

describe("Login", () => {
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
          <LoginWithConnect />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch("Войти");
    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
  });
});