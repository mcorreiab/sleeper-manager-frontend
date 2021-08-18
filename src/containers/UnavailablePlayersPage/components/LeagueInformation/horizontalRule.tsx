import classnames from "classnames";
import styles from "./horizontalRule.module.css";

export interface Props {
  className?: string;
}

const horizontalRule: React.FunctionComponent<Props> = ({ className }) => (
  <hr className={classnames(styles.horizontalRule, className)} />
);

export default horizontalRule;
