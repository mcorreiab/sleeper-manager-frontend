import { screen } from "@testing-library/react";

export async function expectUserDataToBePresent(
  userAvatarUrl: string,
  username: string
): Promise<void> {
  const userAvatar = await screen.findByAltText("User avatar");

  if (!(userAvatar instanceof HTMLImageElement)) {
    fail("User avatar should be a button");
  }

  expect(userAvatar.src).toEqual(userAvatarUrl);
  expect(screen.getByText(username)).toBeInTheDocument();
}

export function expectOverviewToBePresent(): void {
  expect(screen.getByAltText("A generic league badge")).toBeInTheDocument();
  expect(
    screen.getByAltText("A generic football helmet badge")
  ).toBeInTheDocument();
  expect(screen.getByLabelText("League's overview")).toHaveTextContent(
    "3 Leagues to be reviewed"
  );
  expect(screen.getByLabelText("Player's overview")).toHaveTextContent(
    "15 Players to be changed"
  );
}

export function expectLeagueDataToBePresent(
  leagueName: string,
  outPlayers: number,
  doubtfulPlayers: number,
  questionablePlayers: number
): void {
  expect(screen.getByText(leagueName)).toBeInTheDocument();
  expect(
    screen.getByLabelText(`${leagueName} players situation`)
  ).toHaveTextContent(
    `${outPlayers} Out ${doubtfulPlayers} Doubtful ${questionablePlayers} Questionable`
  );
}
