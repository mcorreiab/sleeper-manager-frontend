import classNames from "classnames";
import HorizontalRule from "./horizontalRule";
import Player from "./player";

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
      <h3
        className={classNames(
          "font-bold",
          "text-xs",
          "text-[#dbdfff]",
          "py-1",
          "px-2",
          "rounded-[32px]",
          "bg-sm-blue",
          "self-start",
          "mb-[0.625rem]"
        )}
      >
        {statusLabel}
      </h3>
      <ul className="list-none text-sm text-sm-lightgray flex flex-col items-start">
        {playersComponent}
      </ul>
      {!lastStatus && <HorizontalRule className="mt-2 mb-6 mx-0" />}
    </div>
  );
};

export default ListStatusPlayer;
