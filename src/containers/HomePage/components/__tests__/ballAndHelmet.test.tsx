import renderer from "react-test-renderer";
import BallAndHelmet from "../ballAndHelmet";

it("should render the ball and helmet svg no props", () => {
  expect(renderer.create(<BallAndHelmet />).toJSON()).toMatchSnapshot();
});
