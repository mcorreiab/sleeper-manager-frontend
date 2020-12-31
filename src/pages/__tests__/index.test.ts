import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Index from "../index";

describe("render main page", () => {
  it("should render application title with success", () => {
    render(Index());

    expect(screen.queryByText("Sleeper Manager")).toBeInTheDocument();
  });

  it("should have a github mark", () => {
    render(Index());

    expect(screen.queryByTestId("github-icon")).toBeInTheDocument();
  });

  it("should have a about icon", () => {
    render(Index());

    expect(screen.queryByTestId("info")).toBeInTheDocument();
  });

  it("should have a overall explanation of what does the platform", () => {
    render(Index());

    expect(
      screen.queryByText("Tool to easy your life at sleeper fantasy platform")
    ).toBeInTheDocument();
  });

  it("should have a explanation of how to use", () => {
    render(Index());

    expect(
      screen.queryByText(
        "Insert your username to check all players with non ok injury status"
      )
    ).toBeInTheDocument();
  });

  it("should have an input to put username", () => {
    render(Index());

    expect(
      screen.queryByPlaceholderText("Insert your username here")
    ).toBeInTheDocument();
  });

  it("should have a button to init search", () => {
    render(Index());

    expect(screen.queryByText("GO")).toBeInTheDocument();
  });

  it("should render the image", () => {
    render(Index());

    expect(screen.queryByAltText("Helmet and ball image")).toBeInTheDocument();
  });
});
