import classNames from "classnames";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { RosterProps } from "../../rosterProps";
import { getPlayersByStatus } from "../../rosterQuantities";
import PlayersOverview from "../PlayersOverview";

interface Props {
  roster: RosterProps;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  isSelected: boolean;
}

const RosterCard: React.FunctionComponent<Props> = ({
  roster,
  onClick,
  isSelected,
}) => {
  const playersByStatus = getPlayersByStatus(roster);

  return (
    <li key={roster.name}>
      <button
        className={classNames(
          "grid",
          "grid-cols-[32px_1fr]",
          "gap-x-2",
          "py-4",
          "px-6",
          "place-items-start",
          { "bg-sm-blue": isSelected }
        )}
        onClick={onClick}
      >
        <div className="row-span-2 self-center text-[0]">
          <Image
            src={roster.avatarUrl}
            alt={`Roster ${roster.name} avatar`}
            width={32}
            height={32}
          />
        </div>
        <h2 className="font-bold text-[#E6E8ED] col-start-2 text-start">
          {roster.name}
        </h2>
        <PlayersOverview
          rosterName={roster.name}
          doubtfulPlayers={playersByStatus.doubtfulPlayers.length}
          questionablePlayers={playersByStatus.questionablePlayers.length}
          outPlayers={playersByStatus.outPlayers.length}
          className="text-[#E6E8ED] col-start-2"
        />
      </button>
    </li>
  );
};

export default RosterCard;
