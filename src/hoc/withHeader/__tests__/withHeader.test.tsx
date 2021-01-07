import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WithHeader from "../index";

describe("withHeader high order component", () => {
  it("should render application title with success", () => {
    render(
      <WithHeader>
        <div />
      </WithHeader>
    );

    expect(screen.queryByText("Sleeper Manager")).toBeInTheDocument();
  });

  it("should have a github mark", () => {
    render(
      <WithHeader>
        <div />
      </WithHeader>
    );

    expect(screen.queryByTestId("github-icon")).toBeInTheDocument();
  });

  it("should have a about icon", () => {
    render(
      <WithHeader>
        <div />
      </WithHeader>
    );

    expect(screen.queryByTestId("info")).toBeInTheDocument();
  });
});
