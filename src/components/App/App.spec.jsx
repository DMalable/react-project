import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

describe("App", () => {
  describe("when logged out", () => {
    it("renders correctly", () => {
      const { container } = render(<App />);
      expect(container.innerHTML).toMatch("Войти");
    });
    it("opens registration page and returns", () => {
      const { container, getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("Регистрация"));
      expect(container.innerHTML).toMatch("Зарегистрироваться");
      fireEvent.click(getByText("Войти"));
      expect(container.innerHTML).toMatch("Воити");
    });
  });
  // describe("when logged in", () => {
  //   it("renders correctly", () => {
  //     const { container } = render(<App isLoggedIn />);
  //     expect(container.innerHTML).toMatch("aВойти");
  //   });
  // });
});
