import React from "react";
import { render } from "@testing-library/react";
import FaceCard from "./FaceCard";

describe("FaceCard tests", () => {
  it("should render", () => {
    expect(render(<FaceCard />)).toBeTruthy();
  });
});
