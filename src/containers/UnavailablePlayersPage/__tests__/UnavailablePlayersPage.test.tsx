import React from "react";
import { useRouter } from "next/router";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "../../util/jest-matchers/jest-extend-header";
import UnavailablePlayersPage from "../index";

jest.mock("next/link", () => ({ children }) => children);
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const mockedUseRouter = useRouter as jest.Mock;

const username = "username";
const userAvatarUrl = "http://test.com/";

const createLeague = (
  name: string,
  size: number,
  avatarUrl: string,
  type: string
) => ({ name, size, avatarUrl, type });

const initialSelectedLeague = createLeague(
  "firstRoster",
  10,
  "http://league.com/",
  "Standard"
);

const secondLeague = createLeague(
  "secondRoster",
  12,
  "http://league2.com/",
  "Half PPR"
);

const thirdLeague = createLeague(
  "thirdRoster",
  14,
  "http://league3.com/",
  "PPR"
);

const rosters = [initialSelectedLeague, secondLeague, thirdLeague];

mockedUseRouter.mockImplementation(() => ({
  query: {
    user: username,
  },
}));

const expectThatLeagueIsOnScreen = async ({ name, size, type, avatarUrl }) => {
  expect(screen.queryByText(name)).toBeInTheDocument();
  expect(screen.queryByText(`${size} teams | ${type}`)).toBeInTheDocument();

  const leagueAvatar = await screen.findByAltText("League avatar");

  if (!(leagueAvatar instanceof HTMLImageElement)) {
    throw new Error(`Should be a image, is ${leagueAvatar}`);
  }

  expect(leagueAvatar.src).toEqual(avatarUrl);
};

describe("Unavailable players page", () => {
  it("should mount screen with success", async () => {
    render(
      <UnavailablePlayersPage userAvatarUrl={userAvatarUrl} rosters={rosters} />
    );

    expect(screen).toHaveACompleteHeader();
    expect(screen.queryByText(username)).toBeInTheDocument();

    const avatar = await screen.findByAltText("User avatar");

    if (!(avatar instanceof HTMLImageElement)) {
      throw new Error(`Should be a image, is ${avatar}`);
    }

    expect(avatar.src).toEqual(userAvatarUrl);

    await expectThatLeagueIsOnScreen(initialSelectedLeague);

    expect(screen.queryByAltText("left arrow")).toBeInTheDocument();
  });

  it("when clicking on right arrow should show the next roster", async () => {
    render(
      <UnavailablePlayersPage userAvatarUrl={userAvatarUrl} rosters={rosters} />
    );

    const rightArrow = await screen.findByAltText("right arrow");
    fireEvent.click(rightArrow);

    await expectThatLeagueIsOnScreen(secondLeague);
  });

  it("when clicking on right arrow and finish the list should return to beginning", async () => {
    render(
      <UnavailablePlayersPage userAvatarUrl={userAvatarUrl} rosters={rosters} />
    );

    const rightArrow = await screen.findByAltText("right arrow");
    for (let i = 0; i < rosters.length; i += 1) {
      fireEvent.click(rightArrow);
    }
    await expectThatLeagueIsOnScreen(initialSelectedLeague);
  });
});
