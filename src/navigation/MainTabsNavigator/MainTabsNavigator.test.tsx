import React from "react";

import { render } from "setupTests";

import MainTabsNavigator from "./MainTabsNavigator";

describe("MainTabs navigator", () => {
  it("renders without crashing", () => {
    render(<MainTabsNavigator />);
  });
});
