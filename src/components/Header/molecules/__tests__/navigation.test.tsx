import renderer from "react-test-renderer";
import Navigation from "../navigation";

it("should render the navigation with title, github logo and about", () => {
  const tree = renderer.create(<Navigation />).toJSON();
  expect(tree).toMatchSnapshot();
});
