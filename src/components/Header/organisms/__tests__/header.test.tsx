import { render } from "@testing-library/react";
import Header from "../header";

it("should render with no props", () => {
  const { getByText, getByTitle } = render(<Header />);
  expect(getByText("Sleeper Manager")).toBeInTheDocument();
  expect(
    getByTitle("Go to the github repository of this project")
  ).toBeInTheDocument();
  expect(
    getByTitle("More information about sleeper manager")
  ).toBeInTheDocument();
});
