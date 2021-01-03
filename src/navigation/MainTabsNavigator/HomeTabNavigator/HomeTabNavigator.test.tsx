import React from "react";

import { render } from "setupTests";

import HomeTabNavigator from "./HomeTabNavigator";

describe("HomeTab navigator", () => {
  it("renders without crashing", () => {
    render(<HomeTabNavigator />);
  });
});
