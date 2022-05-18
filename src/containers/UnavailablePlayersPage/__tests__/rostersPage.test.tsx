import renderer from "react-test-renderer";
import RostersPage, { RosterProps } from "../rostersPage";

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
  const tree = renderer
    .create(
      <RostersPage user="darthvader" userAvatarUrl="/mockAvatar" rosters={[]} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
