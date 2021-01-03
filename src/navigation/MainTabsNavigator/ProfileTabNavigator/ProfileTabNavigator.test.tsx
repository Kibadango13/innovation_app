import React from "react";

import { render } from "setupTests";

import ProfileTabNavigator from "./ProfileTabNavigator";

describe("ProfileTab navigator", () => {
  it("renders without crashing", () => {
    render(<ProfileTabNavigator />);
  });
});
