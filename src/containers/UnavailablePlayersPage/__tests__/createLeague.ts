import { RosterProps, PlayerProps } from "../index";
import { LeagueContext } from "./types";

export default (
  faker: Faker.FakerStatic,
  { out, doubtful, questionable, name }: LeagueContext
): RosterProps => {
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

  return createLeague(name, 10, faker.internet.url(), "Standard", players);
};

function createPlayersByStatus(
  quantityOfPlayers: number,
  leagueName: string,
  faker: Faker.FakerStatic,
  injuryStatus: string
): PlayerProps[] {
  const players: PlayerProps[] = [];

  for (let index = 0; index < quantityOfPlayers; index += 1) {
    const name = faker.name.findName();
    const player: PlayerProps = {
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
  name: string,
  size: number,
  avatarUrl: string,
  type: string,
  players: PlayerProps[]
): RosterProps {
  return { name, size, avatarUrl, type, players };
}
