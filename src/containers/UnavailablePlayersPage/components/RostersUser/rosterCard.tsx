import classNames from "classnames";
import Image from "next/image";
import { RosterProps } from "../../rosterProps";
import { getPlayersByStatus } from "../../rosterQuantities";
import PlayersOverview from "../PlayersOverview";

interface Props {
  roster: RosterProps;
}

const RosterCard: React.FunctionComponent<Props> = ({ roster }) => {
  const playersByStatus = getPlayersByStatus(roster);

  return (
    <li
      key={roster.name}
      className={classNames(
        "grid",
        "grid-cols-[32px_1fr]",
        "gap-x-2",
        "py-4",
        "px-6"
      )}
    >
      <div className="row-span-2 self-center text-[0]">
        <Image
          src={roster.avatarUrl}
          alt={`Roster ${roster.name} avatar`}
          width={32}
          height={32}
        />
      </div>
      <h2 className="font-bold text-[#E6E8ED] col-start-2">{roster.name}</h2>
      <PlayersOverview
        rosterName={roster.name}
        doubtfulPlayers={playersByStatus.doubtfulPlayers.length}
        questionablePlayers={playersByStatus.questionablePlayers.length}
        outPlayers={playersByStatus.outPlayers.length}
        className="text-[#E6E8ED] col-start-2"
      />
    </li>
  );
};

export default RosterCard;
