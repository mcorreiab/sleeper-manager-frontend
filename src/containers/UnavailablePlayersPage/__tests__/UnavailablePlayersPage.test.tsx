import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import useUser from "@/hooks/useUser";
import UnavailablePlayersPage from "../index";
import createLeague from "./createLeague";
import { LeagueContext } from "./types";
import {
  expectOverviewToBePresent,
  expectUserDataToBePresent,
  expectLeagueDataToBePresent,
  expectPlayersToBePresent,
} from "./expected";
import getRoster from "@/services/roster";

jest.mock(
  "next/link",
  () =>
    ({ children }) =>
      children
);
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
jest.mock("@/hooks/useUser");
jest.mock("@/services/roster");

const mockedUseUser = useUser as jest.Mock;
const mockedGetRoster = getRoster as jest.MockedFunction<typeof getRoster>;

const username = "username";
const displayName = "displayName";
const userAvatarUrl = "userAvatarUrl";
const expectedAvatarUrl = `https://sleepercdn.com/avatars/${userAvatarUrl}`;

const userData = {
  data: {
    username,
    userId: "userId",
    avatar: userAvatarUrl,
    displayName,
  },
  isLoading: false,
};

describe("Mount Unavailable Players page with roster data", () => {
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

  const fourthLeagueContext: LeagueContext = {
    out: 0,
    doubtful: 1,
    questionable: 0,
    name: "Major League Soccer",
  };

  const firstLeague = createLeague(faker, firstLeagueContext);
  const secondLeague = createLeague(faker, secondLeagueContext);
  const thirdLeague = createLeague(faker, thirdLeagueContext);
  const fourthLeague = createLeague(faker, fourthLeagueContext);

  const rosters = [firstLeague, secondLeague, thirdLeague, fourthLeague];

  beforeAll(() => {
    mockedUseUser.mockReturnValue(userData);

    mockedGetRoster.mockResolvedValue(rosters);
  });

  it("should mount screen with unavailable players to show", async () => {
    render(<UnavailablePlayersPage username={username} />);

    await waitFor(() => {
      expect(screen).toHaveACompleteHeader();
      expectUserDataToBePresent(expectedAvatarUrl, displayName);
      expectOverviewToBePresent(4, 16);

      expect(screen.getByText("Leagues to review")).toBeInTheDocument();

      expectLeagueDataToBePresent(firstLeagueContext);
      expectLeagueDataToBePresent(secondLeagueContext);
      expectLeagueDataToBePresent(thirdLeagueContext);
      expectLeagueDataToBePresent(fourthLeagueContext);

      expect(screen.getAllByText("Questionable").length).toBe(2);
      expect(screen.getAllByText("Doubtful").length).toBe(2);
      expect(screen.getAllByText("Out").length).toBe(3);

      expectPlayersToBePresent(firstLeague.players);
      expectPlayersToBePresent(secondLeague.players);
      expectPlayersToBePresent(thirdLeague.players);
      expectPlayersToBePresent(fourthLeague.players);
    });
  });

  it("should correctly toggle the arrow", async () => {
    render(<UnavailablePlayersPage username={username} />);

    await waitFor(() => {
      expect(screen.getAllByAltText("An arrow down").length).toEqual(4);
    });

    const leagueCard = await screen.findByText(firstLeagueContext.name);

    userEvent.click(leagueCard);

    await waitFor(() => {
      expect(screen.getAllByAltText("An arrow down").length).toEqual(3);
      expect(screen.getAllByAltText("An arrow up").length).toEqual(1);
    });

    userEvent.click(leagueCard);

    await waitFor(() => {
      expect(screen.getAllByAltText("An arrow down").length).toEqual(4);
    });
  });
});

it("should get loading state when still didnt find user data", () => {
  mockedUseUser.mockReturnValue({ data: undefined, isLoading: true });

  render(<UnavailablePlayersPage username={username} />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

it("should get loading state when found user data but didnt found rosters", async () => {
  mockedUseUser.mockReturnValue(userData);

  render(<UnavailablePlayersPage username={username} />);

  await waitFor(() => {
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});

it("should mount screen with with no players to show and defaul avatar", async () => {
  const data = { ...userData.data, ...{ avatar: null } };
  const userDataNoAvatar = { ...userData, data };
  mockedUseUser.mockReturnValue(userDataNoAvatar);
  mockedGetRoster.mockResolvedValue([]);

  render(<UnavailablePlayersPage username={username} />);

  await waitFor(() => {
    expect(screen).toHaveACompleteHeader();
    expectUserDataToBePresent("http://localhost/sleeper-logo.png", displayName);
    expectOverviewToBePresent(0, 0);

    expect(screen.getByText("Nothing to show")).toBeInTheDocument();
    expect(
      screen.queryByText("All your players are up to go!")
    ).toBeInTheDocument();
  });
});
