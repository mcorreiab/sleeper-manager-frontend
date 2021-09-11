import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";
import HomePage from "../index";

jest.mock(
  "next/link",
  () =>
    ({ children }) =>
      children
);
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const mockedUseRouter = useRouter as jest.Mock;

const username = "username";

describe("render home page", () => {
  describe("render static information", () => {
    it("should render the page", () => {
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
  });

  describe("check for user input", () => {
    const typeOnUsernameInput = async (inputtedUsername: string) => {
      const usernameInput = await screen.findByPlaceholderText(
        "Insert your username here"
      );

      if (!(usernameInput instanceof HTMLInputElement)) {
        throw new Error(`Should be a input, is ${usernameInput}`);
      }

      fireEvent.change(usernameInput, { target: { value: inputtedUsername } });
      return usernameInput;
    };

    it("when informing an username should show it", async () => {
      render(<HomePage />);

      const usernameInput = await typeOnUsernameInput(username);

      expect(usernameInput.value).toEqual(username);
    });

    const goButtonClick = async () => {
      const goButton = await screen.findByText("GO");
      if (!(goButton instanceof HTMLInputElement)) {
        throw new Error(`Should be a input, is ${goButton}`);
      }

      fireEvent.click(goButton);
    };

    it("if username is not informed should return an error", async () => {
      render(<HomePage />);

      await goButtonClick();

      expect(
        screen.queryByText("Should inform an username")
      ).toBeInTheDocument();
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

    it("should successfuly input username and go", async () => {
      const mockRouterPush = jest.fn();
      mockedUseRouter.mockImplementation(() => ({
        push: mockRouterPush,
      }));
      render(<HomePage />);

      await typeOnUsernameInput(username);

      await goButtonClick();

      await waitFor(() => {
        expect(mockRouterPush).toHaveBeenCalledWith({
          pathname: "/unavailable",
          query: { user: "username" },
        });
      })
    });
  });
});
