import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WithHeader from "../index";

describe("withHeader high order component", () => {
  it("should render header with success", () => {
    render(
      <WithHeader>
        <div />
      </WithHeader>
    );

    expect(screen.queryByText("Sleeper Manager")).toBeInTheDocument();
    expect(screen.queryByTestId("github-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("info")).toBeInTheDocument();
  });
});
