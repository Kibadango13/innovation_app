import React from "react";
import { render } from "setupTests";

import Home from "./Home.screen";

describe("Home page", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });
});
