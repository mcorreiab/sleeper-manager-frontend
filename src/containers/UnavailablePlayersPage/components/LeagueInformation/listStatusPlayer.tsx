import HorizontalRule from "./horizontalRule";
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
  lastStatus: boolean;
}

const listStatusPlayer: React.FunctionComponent<Props> = ({
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
    <div className={styles.container}>
      <h3 className={styles.statusLabel}>{statusLabel}</h3>
      <ul className={styles.playerList}>{playersComponent}</ul>
      {!lastStatus && <HorizontalRule className={styles.horizontalRule} />}
    </div>
  );
};

export default listStatusPlayer;
