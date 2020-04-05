import React from "react";
import { appRender } from "setupTests";

import { App } from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    appRender(<App />);
  });
});
