import React from "react";

import { render, waitFor } from "setupTests";
import Home from "./Home.screen";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";
import { HomeRoute } from "./Home.screen.types";

describe("Home screen", () => {
  it("renders without crashing", async () => {
    render(
      <Home
        navigation={buildStackNavigation()}
        route={buildRoute<HomeRoute>({ name: "Home" })}
      />
    );
    await waitFor(() => new Promise(resolve => resolve()));
  });
});
