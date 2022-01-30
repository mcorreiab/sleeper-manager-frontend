import renderer from "react-test-renderer";
import BallAndHelmet from "../ballAndHelmet";

it("should render the svg hidden from aria", () => {
  const tree = renderer.create(<BallAndHelmet />).toJSON();
  expect(tree).toMatchSnapshot();
});
