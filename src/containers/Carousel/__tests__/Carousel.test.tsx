import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Carousel, { RosterProps } from "../index";

const createRoster = (
  name: string,
  size: number,
  avatarUrl: string,
  type: string
): RosterProps => ({
  name,
  size,
  avatarUrl,
  type,
});

const firstRoster = createRoster(
  "firstRosterName",
  8,
  "firstAvatar",
  "firstType"
);

const secondRoster = createRoster(
  "secondRosterName",
  10,
  "secondAvatar",
  "secondType"
);

const thirdRoster = createRoster(
  "thirdRosterName",
  12,
  "thirdAvatar",
  "thirdType"
);

const rosters = [firstRoster, secondRoster, thirdRoster];

const expectRosterInScreen = ({ name, size, type }: RosterProps) => {
  expect(screen.queryByText(name)).toBeInTheDocument();
  expect(screen.queryByText(`${size} teams | ${type}`)).toBeInTheDocument();
};

const expectMultipleOccurrencesOfRoster = ({
  name,
  size,
  type,
}: RosterProps) => {
  expect(screen.queryAllByText(name).length).toEqual(2);
  expect(screen.queryAllByText(`${size} teams | ${type}`).length).toEqual(2);
};

describe("Carousel test", () => {
  it("should render the carousel with success", () => {
    render(<Carousel rosters={rosters} />);

    expectRosterInScreen(firstRoster);
    expectRosterInScreen(secondRoster);
    expectMultipleOccurrencesOfRoster(thirdRoster);
  });

  it("when clicks on right button should move carousel to the next card", async () => {
    render(<Carousel rosters={rosters} />);
    const rightButton = screen.getByAltText("Right button");
    fireEvent.click(rightButton);

    const slider = screen.getByTestId("slider");
    fireEvent.transitionEnd(slider);

    expectMultipleOccurrencesOfRoster(firstRoster);
    expectRosterInScreen(secondRoster);
    expectRosterInScreen(thirdRoster);
  });

  it("when clicks on left button should move carousel to the next card", async () => {
    render(<Carousel rosters={rosters} />);
    const leftButton = screen.getByAltText("Left button");
    fireEvent.click(leftButton);

    const slider = screen.getByTestId("slider");
    fireEvent.transitionEnd(slider);

    expectRosterInScreen(firstRoster);
    expectMultipleOccurrencesOfRoster(secondRoster);
    expectRosterInScreen(thirdRoster);
  });
});
