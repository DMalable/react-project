import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
// import { act } from "react-dom/test-utils";

jest.mock("../Map/Map", () => ({ MapWithConnect: () => <div>Map content</div> }));

describe("App", () => {
  describe("when logged out", () => {
    it("renders correctly", () => {
      const mockStore = {
        getState: () => ({ auth: { isLoggedIn: false } }),
        subscribe: () => { },
        dispatch: () => { },
      };
      const history = createMemoryHistory();
      const { container } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </Router>
      );
      expect(container.innerHTML).toMatch("Войти");
    });
    it("opens registration page and returns", () => {
      const mockStore = {
        getState: () => ({ auth: { isLoggedIn: false } }),
        subscribe: () => { },
        dispatch: () => { },
      };
      const history = createMemoryHistory();
      const { container, getByText } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </Router>
      );
      expect(container.innerHTML).toMatch("Войти");
      fireEvent.click(getByText("Регистрация"));
      expect(container.innerHTML).toMatch("Зарегистрироваться");
      fireEvent.click(getByText("Войти"));
      expect(container.innerHTML).toMatch("Воити");
    });
  });
  describe("when logged in", () => {
    it("renders correctly", () => {
      const mockStore = {
        getState: () => ({ auth: { isLoggedIn: true } }),
        subscribe: () => { },
        dispatch: () => { },
      };
      const history = createMemoryHistory();
      const { container } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </Router>
      );
      expect(container.innerHTML).toMatch("Map content");
    });
  });
});
