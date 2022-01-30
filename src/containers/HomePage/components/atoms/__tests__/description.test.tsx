import renderer from "react-test-renderer";
import Description from "../description";

it("should render the description with text", () => {
  const tree = renderer.create(<Description />).toJSON();
  expect(tree).toMatchSnapshot();
});
