import renderer from "react-test-renderer";
import GithubLogo from "../githubLogo";

it("should render with the github svg logo", () => {
  const tree = renderer.create(<GithubLogo />).toJSON();
  expect(tree).toMatchSnapshot();
});
