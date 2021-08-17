import classnames from "classnames";
import styles from "./index.module.css";

export interface Props {
  className?: string;
}

const roundDivider: React.FunctionComponent<Props> = ({ className }) => (
  <img
    src="/round-divider.svg"
    alt="Divider"
    aria-hidden="true"
    className={classnames(styles.roundDivider, className)}
  />
);

export default roundDivider;
