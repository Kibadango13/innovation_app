import React from "react";

import { render, waitFor } from "setupTests";
import ScreenTemplate from "./ScreenTemplate.screen";

describe("ScreenTemplate page", () => {
  it("renders without crashing", async () => {
    render(<ScreenTemplate />);
    await waitFor(() => new Promise(resolve => resolve()));
  });
});
