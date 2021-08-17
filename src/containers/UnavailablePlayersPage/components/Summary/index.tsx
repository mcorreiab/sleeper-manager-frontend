import SummaryItem from "./summaryItem";
import styles from "./index.module.css";

export interface Props {
  leaguesTotal: number;
  playersTotal: number;
}

const summary: React.FunctionComponent<Props> = ({
  leaguesTotal,
  playersTotal,
}) => (
  <ul className={styles.content}>
    <SummaryItem
      summaryLabel="League's overview"
      imagePath="/generic-league-badge.svg"
      imageDescription="A generic league badge"
      quantity={leaguesTotal}
      text="Leagues to be reviewed"
    />
    <hr className={styles.divider} />
    <SummaryItem
      summaryLabel="Player's overview"
      imagePath="/generic-helmet.svg"
      imageDescription="A generic football helmet badge"
      quantity={playersTotal}
      text="Players to be changed"
    />
  </ul>
);

export default summary;
