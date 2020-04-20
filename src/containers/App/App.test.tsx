import React from "react";
import { appRender, wait } from "setupTests";

import { App } from "./App";

describe("App", () => {
  it("renders without crashing", async () => {
    await wait(() => {
      appRender(<App />);
    });
  });
});
