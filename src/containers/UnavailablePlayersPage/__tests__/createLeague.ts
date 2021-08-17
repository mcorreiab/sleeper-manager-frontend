import { RosterProps, PlayerProps } from "../index";

export default (
  faker: Faker.FakerStatic,
  outPlayers: number,
  doubtfulPlayers: number,
  questionablePlayers: number,
  leagueName: string
): RosterProps => {
  const outPlayersList = createPlayersByStatus(
    outPlayers,
    leagueName,
    faker,
    "Out"
  );
  const doubtfulPlayerList = createPlayersByStatus(
    doubtfulPlayers,
    leagueName,
    faker,
    "Doubtful"
  );
  const questionablePlayersList = createPlayersByStatus(
    questionablePlayers,
    leagueName,
    faker,
    "Questionable"
  );

  const players = [
    ...outPlayersList,
    ...doubtfulPlayerList,
    ...questionablePlayersList,
  ];

  return createLeague(
    leagueName,
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
