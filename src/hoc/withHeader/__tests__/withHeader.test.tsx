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
    screen.queryByText("Go to the github repository of this project")
  ).toBeInTheDocument();
  expect(
    screen.queryByText("More information about sleeper manager")
  ).toBeInTheDocument();
});
