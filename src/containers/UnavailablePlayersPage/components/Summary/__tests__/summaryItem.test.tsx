import renderer from "react-test-renderer";
import SummaryItem from "../summaryItem";

it("Should render summary item with helmet type", () => {
  const tree = renderer
    .create(
      <SummaryItem
        summaryLabel="summaryLabel"
        imageDescription="imageDescription"
        quantity={5}
        text="text"
        type="helmet"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Should render summary item with badge type", () => {
  const tree = renderer
    .create(
      <SummaryItem
        summaryLabel="summaryLabel"
        imageDescription="imageDescription"
        quantity={5}
        text="text"
        type="badge"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
