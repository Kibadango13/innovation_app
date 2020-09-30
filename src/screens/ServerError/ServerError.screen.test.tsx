import React from "react";

import { render, waitFor } from "setupTests";
import ServerError from "./ServerError.screen";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";
import { ServerErrorRoute } from "./ServerError.screen.types";

describe("ServerError screen", () => {
  it("renders without crashing", async () => {
    render(
      <ServerError
        navigation={buildStackNavigation()}
        route={buildRoute<ServerErrorRoute>({ name: "ServerError" })}
      />
    );
    await waitFor(() => new Promise(resolve => resolve()));
  });
});
