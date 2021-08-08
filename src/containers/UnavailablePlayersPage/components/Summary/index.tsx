import SummaryItem from "./summaryItem";
import styles from "./index.module.css";

export interface Props {
  rosters: RosterProps[];
}

export interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
  players: PlayerProps[];
}

export interface PlayerProps {
  id: string;
  name: string;
  injuryStatus: string;
  position: string;
  team: string;
}

const summary: React.FunctionComponent<Props> = ({ rosters }) => {
  const numberOfPlayers = rosters
    .map((roster) => roster.players.length)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  return (
    <ul className={styles.content}>
      <SummaryItem
        summaryLabel="League's overview"
        imagePath="/generic-league-badge.svg"
        imageDescription="A generic league badge"
        quantity={rosters.length}
        text="Leagues to be reviewed"
      />
      <hr className={styles.divider} />
      <SummaryItem
        summaryLabel="Player's overview"
        imagePath="/generic-helmet.svg"
        imageDescription="A generic football helmet badge"
        quantity={numberOfPlayers}
        text="Players to be changed"
      />
    </ul>
  );
};

export default summary;
