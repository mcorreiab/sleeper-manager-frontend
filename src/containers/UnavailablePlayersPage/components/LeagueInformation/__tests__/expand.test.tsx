import renderer from "react-test-renderer";
import Expand from "../expand";

it("should render expand svg without props", () => {
  expect(renderer.create(<Expand />).toJSON()).toMatchSnapshot();
});
