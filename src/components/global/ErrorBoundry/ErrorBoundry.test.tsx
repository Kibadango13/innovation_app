import React from "react";
import { View } from "react-native";

import { render, waitFor } from "setupTests";
import ErrorBoundry from "./ErrorBoundry";

describe("ErrorBoundry", () => {
  it("renders with default props", async () => {
    render(
      <ErrorBoundry>
        <View />
      </ErrorBoundry>
    );
    await waitFor(() => new Promise(resolve => resolve()));
  });
});
