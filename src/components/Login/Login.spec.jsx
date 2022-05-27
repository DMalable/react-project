import React from "react";
import Login from "./Login";
import { render } from "@testing-library/react";

describe("Login", () => {
  it("renders correctly", () => {
    const { container, getByLabelText } = render(<Login />);
    expect(container.innerHTML).toMatch("Войти");
    expect(getByLabelText("Email")).toHaveAttribute("name", "email");
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
  });
});
