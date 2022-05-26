import React from "react";
import { Registration } from "./Registration";
import { render } from "@testing-library/react";

describe("Registration", () => {
  it("renders correctly", () => {
    const { container, getByLabelText } = render(<Registration />);
    expect(container.innerHTML).toMatch("Регистрация");
    expect(getByLabelText("Email*")).toHaveAttribute("name", "email");
    expect(getByLabelText("Как вас зовут?*")).toHaveAttribute("name", "name");
    expect(getByLabelText("Придумайте пароль*")).toHaveAttribute("name", "password");
  });
});
