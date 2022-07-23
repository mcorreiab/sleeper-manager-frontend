import classnames from "classnames";
import RoundDivider from "../RoundDivider";
import HorizontalRule from "./horizontalRule";

export interface Props {
  name: string;
  position: string;
  team: string;
  hasHorizontalRule?: boolean;
  className?: string;
}

const Player: React.FunctionComponent<Props> = ({
  name,
  position,
  team,
  hasHorizontalRule,
  className,
}) => (
  <>
    <li
      className={classnames(
        "grid",
        "grid-cols-4-autofr",
        "gap-y-2",
        "w-full",
        "lg:py-4",
        "lg:pl-6",
        "lg:bg-sm-dark-blue",
        "lg:rounded-lg",
        className
      )}
    >
      <p
        className={classnames(
          "col-start-1",
          "row-start-1",
          "col-span-4",
          "text-sm-lightwhite"
        )}
      >
        {name}
      </p>
      <p
        aria-label={`${name} position`}
        className="col-start-1 row-start-2 text-sm-lightgray text-sm"
      >
        {position}
      </p>
      <RoundDivider className="col-start-2 row-start-2 self-center" />
      <p
        aria-label={`${name} NFL team`}
        className="col-start-3 row-start-2 text-sm-lightgray text-sm"
      >
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
