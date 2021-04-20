import React from "react";
import { useRouter } from "next/router";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "../../util/jest-matchers/jest-extend-header";
import UnavailablePlayersPage, { RosterProps, PlayerProps } from "../index";

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
  type: string,
  players: PlayerProps[]
): RosterProps => ({ name, size, avatarUrl, type, players });

const player: PlayerProps = {
  id: "id",
  injuryStatus: "injuryStatus",
  name: "name",
  position: "position",
  team: "team",
};

const initialSelectedLeague = createLeague(
  "firstRoster",
  10,
  "http://league.com/",
  "Standard",
  [player]
);

const secondLeague = createLeague(
  "secondRoster",
  12,
  "http://league2.com/",
  "Half PPR",
  [player]
);

const thirdLeague = createLeague(
  "thirdRoster",
  14,
  "http://league3.com/",
  "PPR",
  [player]
);

const rosters = [initialSelectedLeague, secondLeague, thirdLeague];

mockedUseRouter.mockImplementation(() => ({
  query: {
    user: username,
  },
}));

describe("Unavailable players page", () => {
  it("should mount screen with success", async () => {
    render(
      <UnavailablePlayersPage userAvatarUrl={userAvatarUrl} rosters={rosters} />
    );

    expect(screen).toHaveACompleteHeader();
    expect(screen.queryByText(initialSelectedLeague.name)).toBeInTheDocument();
    expect(
      screen.queryByText(
        `${initialSelectedLeague.size} teams | ${initialSelectedLeague.type}`
      )
    ).toBeInTheDocument();
    expect(screen.queryAllByText(player.name).length).toBeGreaterThan(0);
  });
});
