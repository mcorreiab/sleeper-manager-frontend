import { screen } from "@testing-library/react";
import { PlayerModel } from "@/services/roster/model";
import { LeagueContext } from "./types";

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

export function expectOverviewToBePresent(
  leaguesToReview: number,
  playersToReview: number
): void {
  expect(screen.getByAltText("A generic league badge")).toBeInTheDocument();
  expect(
    screen.getByAltText("A generic football helmet badge")
  ).toBeInTheDocument();
  expect(screen.getByLabelText("League's overview")).toHaveTextContent(
    `${leaguesToReview} Leagues to be reviewed`
  );
  expect(screen.getByLabelText("Player's overview")).toHaveTextContent(
    `${playersToReview} Players to be changed`
  );
}

export function expectLeagueDataToBePresent({
  name,
  doubtful,
  out,
  questionable,
}: LeagueContext): void {
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByLabelText(`${name} players situation`)).toHaveTextContent(
    `${out} Out ${doubtful} Doubtful ${questionable} Questionable`
  );
}

export function expectPlayersToBePresent(players: PlayerModel[]): void {
  players.forEach((player) => {
    expect(screen.queryByText(player.name)).toBeInTheDocument();
    expect(
      screen.queryByLabelText(`${player.name} position`)
    ).toHaveTextContent(player.position);
    expect(
      screen.queryByLabelText(`${player.name} NFL team`)
    ).toHaveTextContent(player.team);
  });
}
