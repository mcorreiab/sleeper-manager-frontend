import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import InputUsername from "../inputUsername";

it("should render the username input without username", () => {
  const tree = renderer
    .create(
      <InputUsername
        onFormSubmit={() => {}}
        onChangeUsername={() => {}}
        username=""
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render the username input with an username", () => {
  const tree = renderer
    .create(
      <InputUsername
        onFormSubmit={() => {}}
        onChangeUsername={() => {}}
        username="username"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render the username input with user missing error state", () => {
  const tree = renderer
    .create(
      <InputUsername
        onFormSubmit={() => {}}
        onChangeUsername={() => {}}
        username="username"
        isUsernameMissing
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render the username input with user invalid error state", () => {
  const tree = renderer
    .create(
      <InputUsername
        onFormSubmit={() => {}}
        onChangeUsername={() => {}}
        username="username"
        isUsernameInvalid
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("should call a callback when typing an username", async () => {
  const onChangeUsername = jest.fn();
  const { getByPlaceholderText } = render(
    <InputUsername
      onFormSubmit={() => {}}
      onChangeUsername={onChangeUsername}
      username=""
    />
  );

  const input = getByPlaceholderText("Insert your username here");
  await userEvent.type(input, "username");
  expect(onChangeUsername).toHaveBeenCalled();
});

it("should call a callback when click on go button", async () => {
  const onFormSubmit = jest.fn();
  const { getByText } = render(
    <InputUsername
      onFormSubmit={onFormSubmit}
      onChangeUsername={() => {}}
      username=""
    />
  );

  const input = getByText("GO");
  await userEvent.click(input);
  expect(onFormSubmit).toHaveBeenCalled();
});
