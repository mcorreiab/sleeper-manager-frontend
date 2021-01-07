import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useRouter } from "next/router";
import HomePage from "../index";

jest.mock("next/link", () => ({ children }) => children);
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const mockedUseRouter = useRouter as jest.Mock;

describe("render home page", () => {
  describe("render static information", () => {
    it("should have a overall explanation of what does the platform", () => {
      render(<HomePage />);

      expect(
        screen.queryByText("Tool to easy your life at", { exact: false })
      ).toBeInTheDocument();
    });

    it("should have a explanation of how to use", () => {
      render(<HomePage />);

      expect(
        screen.queryByText(
          "Insert your username to check all players with non ok injury status"
        )
      ).toBeInTheDocument();
    });

    it("should render the image", () => {
      render(<HomePage />);

      expect(screen.queryByAltText("Helmet and ball")).toBeInTheDocument();
    });
  });

  describe("check for user input", () => {
    const typeOnUsernameInput = async (username: string) => {
      const usernameInput = await screen.findByPlaceholderText(
        "Insert your username here"
      );

      if (!(usernameInput instanceof HTMLInputElement)) {
        throw new Error(`Should be a input, is ${usernameInput}`);
      }

      fireEvent.change(usernameInput, { target: { value: username } });
      return usernameInput;
    };

    it("when informing an username should show it", async () => {
      const username = "username";
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
      const username = "username";
      render(<HomePage />);

      await goButtonClick();

      const usernameInput = await typeOnUsernameInput(username);

      expect(usernameInput.value).toEqual(username);
      expect(
        screen.queryByText("Should inform an username")
      ).not.toBeInTheDocument();
    });

    it("should successfuly input username and go", async () => {
      const username = "username";
      const mockRouterPush = jest.fn();
      mockedUseRouter.mockImplementation(() => ({
        push: mockRouterPush,
      }));
      render(<HomePage />);

      await typeOnUsernameInput(username);

      await goButtonClick();

      expect(mockRouterPush).toHaveBeenCalledWith(
        `/unavailable?user=${username}`
      );
    });
  });
});
