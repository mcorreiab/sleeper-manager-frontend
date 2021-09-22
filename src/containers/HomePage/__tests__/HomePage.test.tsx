import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import HomePage from "../index";
import useUser from "@/hooks/useUser";
import UserModel from "@/hooks/useUser/model";

jest.mock(
  "next/link",
  () =>
    ({ children }) =>
      children
);

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/hooks/useUser");

const mockedUseRouter = useRouter as jest.Mock;
const mockedUseUser = useUser as jest.MockedFunction<typeof useUser>;

const username = "username";

it("should render the page", () => {
  mockedUseUser.mockReturnValue({
    data: undefined,
    usernameMissing: false,
    error: undefined,
    isLoading: false,
  });

  render(<HomePage />);

  expect(screen).toHaveACompleteHeader();

  expect(
    screen.queryByText("Tool to easy your life at", { exact: false })
  ).toBeInTheDocument();

  expect(
    screen.queryByText(
      "Insert your username to check all players with non ok injury status"
    )
  ).toBeInTheDocument();

  expect(screen.queryByAltText("Helmet and ball")).toBeInTheDocument();
});

describe("test when username is missing", () => {
  beforeAll(() => {
    mockedUseUser.mockReturnValue({
      data: undefined,
      usernameMissing: false,
      error: undefined,
      isLoading: false,
    });
  });

  it("when informing an username should show it", async () => {
    render(<HomePage />);

    const usernameInput = await typeOnUsernameInput(username);

    expect(usernameInput.value).toEqual(username);
  });

  it("if username is not informed should return an error", async () => {
    render(<HomePage />);

    await goButtonClick();

    expect(screen.queryByText("Should inform an username")).toBeInTheDocument();
  });

  it("if is in error state and type something on user input should get out of it", async () => {
    render(<HomePage />);

    await goButtonClick();

    const usernameInput = await typeOnUsernameInput(username);

    expect(usernameInput.value).toEqual(username);
    expect(
      screen.queryByText("Should inform an username")
    ).not.toBeInTheDocument();
  });
});

it("when input an user that doesnt exists should inform that", async () => {
  mockedUseUser.mockReturnValue({
    data: null,
    usernameMissing: true,
    error: undefined,
    isLoading: false,
  });

  render(<HomePage />);

  await typeOnUsernameInput(username);

  await goButtonClick();

  expect(screen.getByText("User not found")).toBeInTheDocument();
});

it("should successfuly input username and go", async () => {
  const mockRouterPush = jest.fn();
  mockedUseRouter.mockImplementation(() => ({
    push: mockRouterPush,
  }));

  const userModel: UserModel = {
    avatar: "avatar",
    displayName: "displayName",
    userId: "userId",
    username,
  };

  mockedUseUser.mockReturnValue({
    data: userModel,
    error: undefined,
    isLoading: false,
    usernameMissing: false,
  });

  render(<HomePage />);

  await typeOnUsernameInput(username);

  await goButtonClick();

  await waitFor(() => {
    expect(mockRouterPush).toHaveBeenCalledWith(`/unavailable/${username}`);
  });
});

async function goButtonClick() {
  const goButton = await screen.findByText("GO");
  if (!(goButton instanceof HTMLInputElement)) {
    throw new Error(`Should be a input, is ${goButton}`);
  }

  userEvent.click(goButton);
}

async function typeOnUsernameInput(inputtedUsername: string) {
  const usernameInput = await screen.findByPlaceholderText(
    "Insert your username here"
  );

  if (!(usernameInput instanceof HTMLInputElement)) {
    throw new Error(`Should be a input, is ${usernameInput}`);
  }

  userEvent.type(usernameInput, inputtedUsername);
  return usernameInput;
}
