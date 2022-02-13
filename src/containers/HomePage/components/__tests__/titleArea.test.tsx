import renderer from "react-test-renderer";
import TitleArea from "../titleArea";

it("should render the title area with no props", () => {
  const tree = renderer.create(<TitleArea />).toJSON();
  expect(tree).toMatchSnapshot();
});
