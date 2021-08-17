import { useRouter } from "next/router";
import { render, screen } from "@testing-library/react";
import faker from "faker";
import UnavailablePlayersPage from "../index";
import createLeague from "./createLeague";
import {
  expectOverviewToBePresent,
  expectUserDataToBePresent,
  expectLeagueDataToBePresent,
} from "./expected";

jest.mock(
  "next/link",
  () =>
    ({ children }) =>
      children
);
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const mockedUseRouter = useRouter as jest.Mock;

const username = "username";
const userAvatarUrl = "http://test.com/";

const firstLeague = createLeague(faker, 3, 0, 1, "League 1");
const secondLeague = createLeague(faker, 5, 2, 3, "Premier League");
const thirdLeague = createLeague(faker, 0, 0, 1, "La liga");

const rosters = [firstLeague, secondLeague, thirdLeague];

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
    await expectUserDataToBePresent(userAvatarUrl, username);
    expectOverviewToBePresent();

    expect(screen.getByText("Leagues to review")).toBeInTheDocument();

    expectLeagueDataToBePresent(firstLeague.name, 3, 0, 1);
    expectLeagueDataToBePresent(secondLeague.name, 5, 2, 3);
    expectLeagueDataToBePresent(thirdLeague.name, 0, 0, 1);

    expect(screen.getAllByText("Questionable").length).toBe(3);
    const questionable = firstLeague.players.filter(
      (player) => player.injuryStatus === "Questionable"
    );

    questionable.forEach((player) => {
      expect(screen.queryByText(player.name)).toBeInTheDocument();
      expect(
        screen.queryByLabelText(`${player.name} position`)
      ).toHaveTextContent(player.position);
      expect(
        screen.queryByLabelText(`${player.name} NFL team`)
      ).toHaveTextContent(player.team);
    });
  });
});
