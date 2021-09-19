import { LeagueContext } from "./types";
import { RosterModel, PlayerModel } from "@/services/roster/model";

export default (
  faker: Faker.FakerStatic,
  { out, doubtful, questionable, name }: LeagueContext
): RosterModel => {
  const outPlayersList = createPlayersByStatus(out, name, faker, "Out");
  const doubtfulPlayerList = createPlayersByStatus(
    doubtful,
    name,
    faker,
    "Doubtful"
  );
  const questionablePlayersList = createPlayersByStatus(
    questionable,
    name,
    faker,
    "Questionable"
  );

  const players = [
    ...outPlayersList,
    ...doubtfulPlayerList,
    ...questionablePlayersList,
  ];

  return createLeague(
    faker.random.alphaNumeric(),
    name,
    10,
    faker.internet.url(),
    "Standard",
    players
  );
};

function createPlayersByStatus(
  quantityOfPlayers: number,
  leagueName: string,
  faker: Faker.FakerStatic,
  injuryStatus: string
): PlayerModel[] {
  const players: PlayerModel[] = [];

  for (let index = 0; index < quantityOfPlayers; index += 1) {
    const name = faker.name.findName();
    const player: PlayerModel = {
      id: leagueName.concat(name),
      injuryStatus,
      name,
      position: faker.vehicle.model(),
      team: faker.vehicle.manufacturer(),
    };

    players.push(player);
  }

  return players;
}

function createLeague(
  id: string,
  name: string,
  size: number,
  avatarUrl: string,
  type: string,
  players: PlayerModel[]
): RosterModel {
  return {
    id,
    league: { name, size, pointsByReception: type, avatar: avatarUrl },
    players,
  };
}
