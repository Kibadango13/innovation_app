import React from "react";

import { render } from "setupTests";
import Home from "./Home.screen";
import {
  buildStackNavigation,
  buildRoute
} from "utils/testUtils/builders/navigation.builder";
import { HomeRoute } from "./Home.screen.types";

describe("Home screen", () => {
  it("renders without crashing", () => {
    render(
      <Home
        navigation={buildStackNavigation()}
        route={buildRoute<HomeRoute>({ name: "Home" })}
      />
    );
  });
});
