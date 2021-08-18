import classnames from "classnames";
import RoundDivider from "../RoundDivider";
import HorizontalRule from "./horizontalRule";
import styles from "./player.module.css";

export interface Props {
  name: string;
  position: string;
  team: string;
  hasHorizontalRule?: boolean;
}

const player: React.FunctionComponent<Props> = ({
  name,
  position,
  team,
  hasHorizontalRule,
}) => (
  <li
    className={classnames(styles.detail, {
      [styles.detailWithRule]: hasHorizontalRule,
    })}
  >
    <p className={styles.name}>{name}</p>
    <p aria-label={`${name} position`} className={styles.position}>
      {position}
    </p>
    <RoundDivider className={styles.divider} />
    <p aria-label={`${name} NFL team`} className={styles.nflTeam}>
      {team}
    </p>
    {hasHorizontalRule && <HorizontalRule className={styles.horizontalRule} />}
  </li>
);

export default player;
