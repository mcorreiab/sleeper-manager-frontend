import renderer from "react-test-renderer";
import Hide from "../hide";

it("should render expand svg without props", () => {
  expect(renderer.create(<Hide />).toJSON()).toMatchSnapshot();
});
