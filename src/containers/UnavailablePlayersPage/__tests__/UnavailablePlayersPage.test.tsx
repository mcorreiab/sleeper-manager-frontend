import React from "react";
import { useRouter } from "next/router";
import { render, screen } from "@testing-library/react";
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
const initialSelectedLeague = {
  name: "firstRoster",
  size: 10,
  avatarUrl: "http://league.com/",
  type: "Standard",
};

describe("Unavailable players page", () => {
  it("should mount screen with success", async () => {
    mockedUseRouter.mockImplementation(() => ({
      query: {
        user: username,
      },
    }));

    render(
      <UnavailablePlayersPage
        avatarUrl={userAvatarUrl}
        rosters={initialSelectedLeague}
      />
    );

    expect(screen).toHaveACompleteHeader();
    expect(screen.queryByText(username)).toBeInTheDocument();
    expect(screen.queryByText(initialSelectedLeague.name)).toBeInTheDocument();
    expect(
      screen.queryByText(
        `${initialSelectedLeague.size} teams | ${initialSelectedLeague.type}`
      )
    ).toBeInTheDocument();

    const avatar = await screen.findByAltText("User avatar");

    if (!(avatar instanceof HTMLImageElement)) {
      throw new Error(`Should be a image, is ${avatar}`);
    }

    expect(avatar.src).toEqual(userAvatarUrl);

    const leagueAvatar = await screen.findByAltText("League avatar");

    if (!(leagueAvatar instanceof HTMLImageElement)) {
      throw new Error(`Should be a image, is ${leagueAvatar}`);
    }

    expect(leagueAvatar.src).toEqual(initialSelectedLeague.avatarUrl);

    expect(screen.queryByAltText("left arrow")).toBeInTheDocument();
    expect(screen.queryByAltText("right arrow")).toBeInTheDocument();
  });
});
