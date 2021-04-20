import React, { FunctionComponent } from "react";
import RoundDivider from "../RoundDivider";
import styles from "./index.module.css";

export interface Props {
  name: string;
  position: string;
  team: string;
  injuryStatus: string;
}

const playerCard: FunctionComponent<Props> = ({
  name,
  position,
  team,
  injuryStatus,
}) => (
  <div className={styles.playerCard}>
    <p className={styles.name}>{name}</p>
    <p className={styles.detail}>
      {position}
      <RoundDivider />
      {team}
      <RoundDivider />
      {injuryStatus}
    </p>
  </div>
);

export default playerCard;
