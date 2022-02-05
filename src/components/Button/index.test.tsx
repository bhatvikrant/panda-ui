import React from "react";
import { render } from "@testing-library/react";

import Button from "./index";

describe("Button", () => {
  it("should render the component", () => {
    expect(render(<Button label="Hello world!" />)).toMatchSnapshot();
  });
});
