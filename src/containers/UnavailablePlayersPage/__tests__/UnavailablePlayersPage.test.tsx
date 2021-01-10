import React from "react";
import { useRouter } from "next/router";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UnavailablePlayersPage from "../index";

jest.mock("next/link", () => ({ children }) => children);
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const mockedUseRouter = useRouter as jest.Mock;

const username = "username";
const avatarUrl = "http://test.com/";

describe("Unavailable players page", () => {
  it("should mount screen with success", async () => {
    mockedUseRouter.mockImplementation(() => ({
      query: {
        user: username,
      },
    }));

    render(<UnavailablePlayersPage avatarUrl={avatarUrl} />);

    expect(screen.queryByText(`${username} leagues`)).toBeInTheDocument();

    const avatar = await screen.findByAltText("User avatar");

    if (!(avatar instanceof HTMLImageElement)) {
      throw new Error(`Should be a image, is ${avatar}`);
    }

    expect(avatar.src).toEqual(avatarUrl);
  });
});
