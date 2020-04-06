import React from "react";

import { render } from "setupTests";
import ServerError from "./ServerError.screen";
import {
  buildStackNavigation,
  buildRoute
} from "utils/testUtils/builders/navigation.builder";

describe("ServerError screen", () => {
  it("renders without crashing", () => {
    render(
      <ServerError
        navigation={buildStackNavigation()}
        route={buildRoute({ name: "ServerError" })}
      />
    );
  });
});

//TODO: add to blue print once it works
