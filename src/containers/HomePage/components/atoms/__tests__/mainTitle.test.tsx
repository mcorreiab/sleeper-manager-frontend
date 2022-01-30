import renderer from 'react-test-renderer';
import MainTitle from "../mainTitle";

it("should render the styled main title", () => {
  const tree = renderer.create(<MainTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
