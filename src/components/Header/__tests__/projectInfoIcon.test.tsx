import renderer from "react-test-renderer";
import ProjectInfoIcon from "../projectInfoIcon";

it("should render the svg logo with no props", () => {
  const tree = renderer.create(<ProjectInfoIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});
