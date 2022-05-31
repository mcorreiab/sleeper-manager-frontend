import classNames from "classnames";
import RoundDivider from "../RoundDivider";

interface Props {
  rosterName: string;
  outPlayers: number;
  doubtfulPlayers: number;
  questionablePlayers: number;
  className?: string;
}

const PlayersOverview: React.FunctionComponent<Props> = ({
  rosterName,
  outPlayers,
  doubtfulPlayers,
  questionablePlayers,
  className,
}) => (
  <p
    aria-label={`${rosterName} players situation`}
    className={classNames(
      "text-sm",
      "row-start-2",
      "col-span-2",
      "flex",
      "items-center",
      className
    )}
  >
    {outPlayers} Out
    <RoundDivider /> {doubtfulPlayers} Doubtful <RoundDivider />
    {questionablePlayers} Questionable
  </p>
);

export default PlayersOverview;
