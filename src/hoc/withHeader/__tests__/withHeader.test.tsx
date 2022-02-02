import renderer from "react-test-renderer";
import WithHeader from "../index";

it("should render header with success", () => {
  const tree = renderer
    .create(
      <WithHeader>
        <div />
      </WithHeader>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
