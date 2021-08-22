import { useRouter } from "next/router";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import UnavailablePlayersPage from "../index";
import createLeague from "./createLeague";
import { LeagueContext } from "./types";
import {
  expectOverviewToBePresent,
  expectUserDataToBePresent,
  expectLeagueDataToBePresent,
  expectPlayersToBePresent,
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

const firstLeagueContext: LeagueContext = {
  out: 3,
  doubtful: 0,
  questionable: 1,
  name: "League 1",
};

const secondLeagueContext: LeagueContext = {
  out: 5,
  doubtful: 2,
  questionable: 3,
  name: "Premier League",
};

const thirdLeagueContext: LeagueContext = {
  out: 1,
  doubtful: 0,
  questionable: 0,
  name: "La liga",
};

const firstLeague = createLeague(faker, firstLeagueContext);
const secondLeague = createLeague(faker, secondLeagueContext);
const thirdLeague = createLeague(faker, thirdLeagueContext);

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

    expectLeagueDataToBePresent(firstLeagueContext);
    expectLeagueDataToBePresent(secondLeagueContext);
    expectLeagueDataToBePresent(thirdLeagueContext);

    expect(screen.getAllByText("Questionable").length).toBe(2);
    expect(screen.getAllByText("Doubtful").length).toBe(1);
    expect(screen.getAllByText("Out").length).toBe(3);

    expectPlayersToBePresent(firstLeague.players);
    expectPlayersToBePresent(secondLeague.players);
    expectPlayersToBePresent(thirdLeague.players);
  });

  it("should correctly toggle the arrow", async () => {
    render(
      <UnavailablePlayersPage userAvatarUrl={userAvatarUrl} rosters={rosters} />
    );

    expect(screen.getAllByAltText("An arrow down").length).toEqual(3);
    const leagueCard = await screen.findByText(firstLeagueContext.name);

    userEvent.click(leagueCard);

    await waitFor(() => {
      expect(screen.getAllByAltText("An arrow down").length).toEqual(2);
      expect(screen.getAllByAltText("An arrow up").length).toEqual(1);
    });

    userEvent.click(leagueCard);

    await waitFor(() => {
      expect(screen.getAllByAltText("An arrow down").length).toEqual(3);
    });
  });
});
