import React from "react";
import { HeaderWithAuth } from "./Header";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("renders correctly", () => {
    const { container } = render(<HeaderWithAuth />);
    expect(container.innerHTML).toMatch(/Карта.+Профиль.+Выйти/);
  });
});
