import { RosterProps } from "./rosterProps";
const getSummaryOnRosters = (rosters: RosterProps[]) => {
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

export default getSummaryOnRosters;
