import Summary from "../index";
import renderer from "react-test-renderer";

it("Should render summary with leagues total and players total", () => {
  const tree = renderer
    .create(<Summary leaguesTotal={5} playersTotal={10} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
