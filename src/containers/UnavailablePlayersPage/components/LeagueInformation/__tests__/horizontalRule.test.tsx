import renderer from "react-test-renderer";
import HorizontalRule from "../horizontalRule";

it("should render horizontal rule without props", () => {
  expect(renderer.create(<HorizontalRule />).toJSON()).toMatchSnapshot();
});
