import { useState } from "react";
import styles from "./index.module.css";
import RoundDivider from "../RoundDivider";
import ListStatusPlayer from "./listStatusPlayer";

export interface PlayerProps {
  id: string;
  name: string;
  injuryStatus: string;
  position: string;
  team: string;
}

export interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
  players: PlayerProps[];
}

export interface Props {
  roster: RosterProps;
  key?: string;
}

const leagueInformation: React.FunctionComponent<Props> = ({ roster }) => {
  const [detailHidden, setDetailHidden] = useState(false);

  const onClick = () => {
    setDetailHidden(!detailHidden);
  };

  const arrow = detailHidden ? (
    <img
      aria-hidden="true"
      src="/expand.svg"
      alt="An arrow down"
      className={styles.expand}
    />
  ) : (
    <img
      aria-hidden="true"
      src="/hide.svg"
      alt="An arrow up"
      className={styles.expand}
    />
  );

  const outPlayers = roster.players.filter(
    (player) => player.injuryStatus === "Out"
  );

  const doubtfulPlayers = roster.players.filter(
    (player) => player.injuryStatus === "Doubtful"
  );

  const questionablePlayers = roster.players.filter(
    (player) => player.injuryStatus === "Questionable"
  );

  return (
    <details
      onToggle={() => onClick()}
      className={styles.container}
    >
      <summary className={styles.summary}>
        <h2 className={styles.name} key={roster.name}>
          {roster.name}
        </h2>
        {arrow}
        <p
          aria-label={`${roster.name} players situation`}
          className={styles.overview}
        >
          {outPlayers.length} Out
          <RoundDivider /> {doubtfulPlayers.length} Doubtful <RoundDivider />
          {questionablePlayers.length} Questionable
        </p>
      </summary>
      <ListStatusPlayer
        statusLabel="Questionable"
        players={questionablePlayers}
        hidden={!detailHidden}
      />
    </details>
  );
};

export default leagueInformation;