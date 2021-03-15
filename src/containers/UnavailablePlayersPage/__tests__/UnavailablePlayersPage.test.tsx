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

describe("Unavailable players page", () => {
  it("should mount screen with success", async () => {
    render(
      <UnavailablePlayersPage userAvatarUrl={userAvatarUrl} rosters={rosters} />
    );

    expect(screen).toHaveACompleteHeader();
  });
});
