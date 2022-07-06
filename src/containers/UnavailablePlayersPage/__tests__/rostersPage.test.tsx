import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RostersPage from "../rostersPage";
import { RosterProps } from "../rosterProps";

const roster: RosterProps = {
  name: "Test League",
  size: 10,
  avatarUrl: "https://sleepercdn.com/avatars/test.png",
  players: [
    {
      id: "1",
      name: "Test Player",
      injuryStatus: "Questionable",
      position: "QB",
      team: "Test Team",
    },
    {
      id: "2",
      name: "Test Player 2",
      injuryStatus: "Doubtful",
      position: "WR",
      team: "Test Team",
    },
    {
      id: "3",
      name: "Test Player 3",
      injuryStatus: "Out",
      position: "RB",
      team: "Test Team",
    },
    {
      id: "4",
      name: "Test Player 4",
      injuryStatus: "Doutful",
      position: "TE",
      team: "Test Team",
    },
  ],
};

it("should render rosters for user darthvader in mobile view", () => {
  global.innerWidth = 500;
  const tree = renderer
    .create(
      <RostersPage
        user="darthvader"
        userAvatarUrl="/mockAvatar"
        rosters={[roster]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render no rosters for user darthvader in mobile view", () => {
  global.innerWidth = 500;
  const tree = renderer
    .create(
      <RostersPage user="darthvader" userAvatarUrl="/mockAvatar" rosters={[]} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render rosters for user darthvader in desktop view", () => {
  global.innerWidth = 1600;
  const tree = renderer
    .create(
      <RostersPage
        user="darthvader"
        userAvatarUrl="/mockAvatar"
        rosters={[roster]}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
