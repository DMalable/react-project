import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import mapbox from "mapbox-gl";
import { MapWithConnect } from "./Map";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => { } })),
}));

describe("Map", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: false } }),
      subscribe: () => { },
      dispatch: () => { },
    };
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <MapWithConnect />
        </Provider>
      </Router>
    );
    expect(mapbox.Map).toHaveBeenCalledWith({
      container: getByTestId("map"),
      style: "mapbox://styles/mapbox/streets-v11",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });
  });
});
