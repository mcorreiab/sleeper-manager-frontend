import renderer from "react-test-renderer";
import Player from "../player";

it("should render player component with horizontal rule", () => {
  const tree = renderer
    .create(
      <Player
        name="Player Name"
        position="Player Position"
        team="Player team"
        hasHorizontalRule
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("should render player component without horizontal rule", () => {
  const tree = renderer
    .create(
      <Player
        name="Player Name"
        position="Player Position"
        team="Player team"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
