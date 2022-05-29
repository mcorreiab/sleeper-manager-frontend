import renderer from "react-test-renderer";
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
      injuryStatus: "Available",
      position: "QB",
      team: "Test Team",
    },
  ],
};

it("should render rosters for user darthvader", () => {
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

it("should render no rosters for user darthvader", () => {
  global.innerWidth = 500;
  const tree = renderer
    .create(
      <RostersPage user="darthvader" userAvatarUrl="/mockAvatar" rosters={[]} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
