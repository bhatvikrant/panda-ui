import React from "react";
import { render } from "@testing-library/react";

import { Avatar } from "./index";

describe("Avatar", () => {
  it("should render the component", () => {
    expect(render(<Avatar />)).toMatchSnapshot();
  });
});
