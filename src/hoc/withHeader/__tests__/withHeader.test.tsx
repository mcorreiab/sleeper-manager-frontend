import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WithHeader from "../index";

it("should render header with success", () => {
  render(
    <WithHeader>
      <div />
    </WithHeader>
  );

  expect(screen.queryByText("Sleeper Manager")).toBeInTheDocument();
  expect(
    screen.queryByAltText("The logo from github webpage")
  ).toBeInTheDocument();
  expect(
    screen.queryByAltText("More information about sleeper manager")
  ).toBeInTheDocument();
});
