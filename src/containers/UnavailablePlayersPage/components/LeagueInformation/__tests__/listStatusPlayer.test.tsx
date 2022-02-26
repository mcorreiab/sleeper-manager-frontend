import renderer from "react-test-renderer";
import ListStatusPlayer from "../listStatusPlayer";

const players = [
  {
    id: "1",
    name: "Player 1",
    position: "Position 1",
    team: "Team 1",
  },
  {
    id: "2",
    name: "Player 2",
    position: "Position 2",
    team: "Team 2",
  },
];

it("given that is not the last status, should render the list with success", () => {
  const tree = renderer
    .create(
      <ListStatusPlayer
        lastStatus={false}
        statusLabel="Status 1"
        players={players}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("given that is the last status, should render the list with success", () => {
  const tree = renderer
    .create(
      <ListStatusPlayer
        lastStatus={true}
        statusLabel="Status 1"
        players={players}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
