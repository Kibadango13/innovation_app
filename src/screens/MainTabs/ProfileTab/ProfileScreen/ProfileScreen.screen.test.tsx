import React from "react";

import { render, waitFor } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

import ProfileScreen from "./ProfileScreen.screen";
import { ProfileScreenRoute } from "./ProfileScreen.screen.types";

describe("ProfileScreen screen", () => {
  it("renders without crashing", async () => {
    render(
      <ProfileScreen
        navigation={buildStackNavigation()}
        route={buildRoute<ProfileScreenRoute>({ name: "Profile" })}
      />
    );
    await waitFor(
      () => new Promise<void>(resolve => resolve())
    );
  });
});
