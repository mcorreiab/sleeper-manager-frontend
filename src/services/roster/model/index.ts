import PlayerModel from "./PlayerModel";
import LeagueModel from "./LeagueModel";

interface RosterModel {
  id: string;
  players: PlayerModel[];
  league: LeagueModel;
}

export default RosterModel;
