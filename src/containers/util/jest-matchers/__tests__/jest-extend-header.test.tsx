import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../../../../components/Header";
import "../jest-extend-header";

it("should have a complete header", () => {
  render(<Header />);

  expect(screen).toHaveACompleteHeader();
});

it("should be missing title", () => {
  render(<div />);

  expect(screen).not.toHaveACompleteHeader();
});

it("should be missing github logo", () => {
  render(<div>Sleeper Manager</div>);

  expect(screen).not.toHaveACompleteHeader();
});

it("should be missing info circle", () => {
  render(
    <div>
      Sleeper Manager
      <img alt="github logo" />
    </div>
  );

  expect(screen).not.toHaveACompleteHeader();
});
