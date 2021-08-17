import classnames from "classnames";
import styles from "./listStatusPlayer.module.css";
import Player from "./player";

export interface PlayerProps {
  id: string;
  name: string;
  position: string;
  team: string;
  hasHorizontalRule?: boolean;
}

export interface Props {
  statusLabel: string;
  players: PlayerProps[];
  hidden: boolean;
}

const listStatusPlayer: React.FunctionComponent<Props> = ({
  statusLabel,
  players,
  hidden,
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
    <div
      className={classnames(styles.container)}
      aria-hidden={hidden}
    >
      <h3 className={styles.statusLabel}>{statusLabel}</h3>
      <ul className={styles.playerList}>{playersComponent}</ul>
    </div>
  );
};

export default listStatusPlayer;
