import React from "react";

import { render } from "setupTests";
import ServerError from "./ServerError.screen";
import {
  buildStackNavigation,
  buildRoute
} from "utils/testUtils/builders/navigation.builder";
import { ServerErrorRoute } from "./ServerError.screen.types";

describe("ServerError screen", () => {
  it("renders without crashing", () => {
    render(
      <ServerError
        navigation={buildStackNavigation()}
        route={buildRoute<ServerErrorRoute>({ name: "ServerError" })}
      />
    );
  });
});
