import React, { FunctionComponent } from "react";
import styles from "./index.module.css";

interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
}

const leagueCard: FunctionComponent<RosterProps> = ({
  avatarUrl,
  name,
  size,
  type,
}) => (
  <div className={styles.leagueCard}>
    <img src={avatarUrl} alt="League avatar" className={styles.leagueImage} />
    <p className={styles.leagueName}>{name}</p>
    <p className={styles.leagueDetails}>
      {size} teams | {type}
    </p>
  </div>
);

export default leagueCard;
