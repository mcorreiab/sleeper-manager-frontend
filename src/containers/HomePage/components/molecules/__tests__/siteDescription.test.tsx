import renderer from "react-test-renderer";
import SiteDescription from "../siteDescription";

it("should render site description with title and description", () => {
  const tree = renderer.create(<SiteDescription />).toJSON();
  expect(tree).toMatchSnapshot();
});
