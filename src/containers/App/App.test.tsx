import React from "react";
import { render } from "setupTests";

import { App } from "./App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
