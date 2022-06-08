import StatusBadge from "../StatusBadge";
import Player from "../LeagueInformation/player";
import { PlayerProps } from "../../rosterProps";

interface Props {
  players: PlayerProps[];
  statusLabel: string;
}

const StatusSection: React.FunctionComponent<Props> = ({
  players,
  statusLabel,
}) => (
  <div className="mb-10">
    <StatusBadge
      tag="h2"
      statusLabel={statusLabel}
      className="text-base py-2 px-4 mb-6 inline-block"
    />
    <ul className="grid grid-cols-2 gap-4">
      {players.map((player) => (
        <Player
          key={player.id}
          position={player.position}
          name={player.name}
          team={player.team}
        />
      ))}
    </ul>
  </div>
);

export default StatusSection;
