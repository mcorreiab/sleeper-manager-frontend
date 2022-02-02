import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import UsernameInput from "../usernameInput";

it("should render the input with the placeholder", () => {
  const tree = renderer
    .create(<UsernameInput onChange={() => {}} username="" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render the input with an username inserted", () => {
  const tree = renderer
    .create(<UsernameInput onChange={() => {}} username="username" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("should render the input with username missing", () => {
  const tree = renderer
    .create(
      <UsernameInput onChange={() => {}} username="" isUsernameMissing={true} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("should render the input with username invalid", () => {
  const tree = renderer
    .create(
      <UsernameInput onChange={() => {}} username="" isUsernameInvalid={true} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("should successfuly call on change callback when typing", () => {
  const callback = jest.fn();
  const { getByPlaceholderText } = render(
    <UsernameInput onChange={callback} username="" />
  );

  userEvent.type(getByPlaceholderText("Insert your username here"), "username");
  expect(callback).toHaveBeenCalled();
});
