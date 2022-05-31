import { RosterProps } from "./rosterProps";
const getCondensedDataOfRosters = (rosters: RosterProps[]) => {
  const numberOfLeagues = rosters.length;

  let totalOfPlayers = 0;
  if (numberOfLeagues > 0) {
    totalOfPlayers = rosters
      .map((roster) => roster.players.length)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  return {
    totalOfPlayers,
    numberOfLeagues,
  };
};

const getPlayersByStatus = (roster: RosterProps) => {
  const outPlayers = roster.players.filter(
    (player) => player.injuryStatus === "Out"
  );

  const doubtfulPlayers = roster.players.filter(
    (player) => player.injuryStatus === "Doubtful"
  );

  const questionablePlayers = roster.players.filter(
    (player) => player.injuryStatus === "Questionable"
  );

  return {
    outPlayers,
    doubtfulPlayers,
    questionablePlayers,
  };
};

export { getCondensedDataOfRosters, getPlayersByStatus };
