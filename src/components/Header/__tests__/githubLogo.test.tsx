import renderer from "react-test-renderer";
import GithubLogo from "../githubLogo";

it("should render the svg logo with no props", () => {
  const tree = renderer.create(<GithubLogo />).toJSON();
  expect(tree).toMatchSnapshot();
});
