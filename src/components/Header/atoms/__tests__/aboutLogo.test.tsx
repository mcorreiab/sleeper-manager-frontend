import renderer from "react-test-renderer";
import AboutLogo from "../aboutLogo";

it("Should render the svg about logo", () => {
  const tree = renderer.create(<AboutLogo />).toJSON();
  expect(tree).toMatchSnapshot();
});
