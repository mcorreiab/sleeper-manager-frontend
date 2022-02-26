import renderer from "react-test-renderer";
import LeagueInformation, { PlayerProps } from "../index";

const outPlayer = {
  id: "1",
  name: "Test Player",
  injuryStatus: "Out",
  position: "Test Position",
  team: "Test Team",
};
const questionablePlayer = {
  id: "3",
  name: "Test Player 3",
  injuryStatus: "Questionable",
  position: "Test Position 3",
  team: "Test Team 3",
};

const doubtfulPlayer = {
  id: "2",
  name: "Test Player 2",
  injuryStatus: "Doubtful",
  position: "Test Position 2",
  team: "Test Team 2",
};
it("should render league information component with all types of status", () => {
  const playersList = [outPlayer, doubtfulPlayer, questionablePlayer];

  expect(
    renderer
      .create(<LeagueInformation roster={createRoster(playersList)} />)
      .toJSON()
  ).toMatchSnapshot();
});

it("should render league information component with only out players", () => {
  expect(
    renderer
      .create(<LeagueInformation roster={createRoster([outPlayer])} />)
      .toJSON()
  ).toMatchSnapshot();
});

it("should render league information component with only questionable players", () => {
  expect(
    renderer
      .create(<LeagueInformation roster={createRoster([questionablePlayer])} />)
      .toJSON()
  ).toMatchSnapshot();
});

it("should render league information component with only doubtful players", () => {
  expect(
    renderer
      .create(<LeagueInformation roster={createRoster([doubtfulPlayer])} />)
      .toJSON()
  ).toMatchSnapshot();
});

it("should render league information component with no players", () => {
  expect(
    renderer.create(<LeagueInformation roster={createRoster([])} />).toJSON()
  ).toMatchSnapshot();
});

function createRoster(playersList: PlayerProps[]) {
  return {
    name: "Test Roster",
    size: 10,
    avatarUrl: "https://test.com",
    players: playersList,
  };
}
