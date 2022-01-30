import renderer from "react-test-renderer";
import Title from "../title";

it("should render the site title", () => {
  const tree = renderer.create(<Title />).toJSON();
  expect(tree).toMatchSnapshot();
});
