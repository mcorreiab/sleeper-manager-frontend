import UserInformation from "../index";
import renderer from "react-test-renderer";

it("Should render user information with John on username", () => {
  const tree = renderer
    .create(<UserInformation username="John" avatarUrl="/avatarUrl" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
