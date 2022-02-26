import classnames from "classnames";
import RoundDivider from "../RoundDivider";
import HorizontalRule from "./horizontalRule";

export interface Props {
  name: string;
  position: string;
  team: string;
  hasHorizontalRule?: boolean;
}

const Player: React.FunctionComponent<Props> = ({
  name,
  position,
  team,
  hasHorizontalRule,
}) => (
  <>
    <li className={classnames("grid grid-cols-4-autofr gap-y-2 w-full")}>
      <p className="col-start-1 row-start-1 col-span-4 text-sm-lightwhite">
        {name}
      </p>
      <p aria-label={`${name} position`} className="col-start-1 row-start-2">
        {position}
      </p>
      <RoundDivider className="col-start-2 row-start-2 self-center" />
      <p aria-label={`${name} NFL team`} className="col-start-3 row-start-2">
        {team}
      </p>
    </li>
    {hasHorizontalRule && (
      <li className="w-full my-2">
        <HorizontalRule />
      </li>
    )}
  </>
);

export default Player;
