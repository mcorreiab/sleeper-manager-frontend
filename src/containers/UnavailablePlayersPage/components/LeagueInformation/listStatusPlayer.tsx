import HorizontalRule from "./horizontalRule";
import Player from "./player";
import StatusBadge from "../StatusBadge";

export interface PlayerProps {
  id: string;
  name: string;
  position: string;
  team: string;
}

export interface Props {
  statusLabel: string;
  players: PlayerProps[];
  lastStatus: boolean;
}

const ListStatusPlayer: React.FunctionComponent<Props> = ({
  statusLabel,
  players,
  lastStatus,
}) => {
  const playersComponent = players.map((player, index) => (
    <Player
      key={player.id}
      name={player.name}
      position={player.position}
      team={player.team}
      hasHorizontalRule={index < players.length - 1}
    />
  ));

  return (
    <div className="flex flex-col">
      <StatusBadge
        tag="h3"
        statusLabel={statusLabel}
        className="text-xs py-1 px-2 mb-[0.625rem]"
      />
      <ul className="list-none text-sm text-sm-lightgray flex flex-col items-start">
        {playersComponent}
      </ul>
      {!lastStatus && <HorizontalRule className="mt-2 mb-6 mx-0" />}
    </div>
  );
};

export default ListStatusPlayer;
