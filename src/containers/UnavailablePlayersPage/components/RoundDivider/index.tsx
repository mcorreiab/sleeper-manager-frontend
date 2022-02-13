import classnames from "classnames";
import styles from "./index.module.css";
import Icon from "./icon";

export interface Props {
  className?: string;
}

const roundDivider: React.FunctionComponent<Props> = ({ className }) => (
  <Icon className={classnames(styles.roundDivider, className)} />
);

export default roundDivider;
