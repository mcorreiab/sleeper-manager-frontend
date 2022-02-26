import renderer from "react-test-renderer";
import Loading from "../index";

it("Should render loading without props", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
