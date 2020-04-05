import React from "react";
import { render } from "setupTests";

import ScreenTemplate from "./ScreenTemplate.screen";

describe("ScreenTemplate page", () => {
  it("renders without crashing", () => {
    render(<ScreenTemplate />);
  });
});
