import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import { HeaderWithConnect } from "./Header";

describe("Header", () => {
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
          <HeaderWithConnect />
        </Provider>
      </Router>
    );
    // render(<HeaderWithConnect />);
    expect(container.innerHTML).toMatch(/Карта.+Профиль.+Выйти/);
  });
});