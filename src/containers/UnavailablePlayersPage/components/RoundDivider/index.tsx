import classnames from "classnames";
import Icon from "./icon";

export interface Props {
  className?: string;
}

const RoundDivider: React.FC<Props> = ({ className }) => (
  <Icon className={classnames("my-0 mx-1", className)} />
);

export default RoundDivider;
