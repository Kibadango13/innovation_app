import React from "react";

import { render, waitFor } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

import HomeScreen from "./HomeScreen.screen";
import { HomeScreenRoute } from "./HomeScreen.screen.types";

describe("HomeScreen screen", () => {
  it("renders without crashing", async () => {
    render(
      <HomeScreen
        navigation={buildStackNavigation()}
        route={buildRoute<HomeScreenRoute>({ name: "Home" })}
      />
    );
    await waitFor(
      () => new Promise<void>(resolve => resolve())
    );
  });
});
