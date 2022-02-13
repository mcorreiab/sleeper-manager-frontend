import renderer from "react-test-renderer";
import Header from "../index";

it("should render the complete header", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
