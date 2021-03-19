import React from "react";
import { render } from "@testing-library/react";
import PortraitContainer from "./PortraitContainer";

describe("PortraitContainer tests", () => {
  it("should render", () => {
    expect(render(<PortraitContainer />)).toBeTruthy();
  });
});
