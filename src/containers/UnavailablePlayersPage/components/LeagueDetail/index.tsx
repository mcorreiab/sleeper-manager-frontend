import Image from "next/image";
import { PlayerProps, RosterProps } from "../../rosterProps";
import { getPlayersByStatus } from "../../rosterQuantities";
import classNames from "classnames";
import StatusSection from "./statusSection";

interface Props {
  roster: RosterProps;
  className?: string;
  innerRef: React.Ref<HTMLElement>;
}

const LeagueDetail: React.FunctionComponent<Props> = ({
  roster,
  className,
  innerRef,
}) => {
  const { questionablePlayers, doubtfulPlayers, outPlayers } =
    getPlayersByStatus(roster);

  const out = createStatusSection("Out", outPlayers);
  const doubtful = createStatusSection("Doubtful", doubtfulPlayers);
  const questionable = createStatusSection("Questionable", questionablePlayers);

  return (
    <section key={roster.name} className={classNames(className)} ref={innerRef}>
      <h1
        className={classNames(
          "font-bold",
          "text-2xl",
          "text-sm-lightwhite",
          "flex",
          "items-center",
          "mb-10"
        )}
      >
        <div className="mr-4">
          <Image
            src={roster.avatarUrl}
            alt={roster.name}
            width={62}
            height={62}
          />
        </div>
        {roster.name}
      </h1>
      {out}
      {doubtful}
      {questionable}
    </section>
  );
};

function createStatusSection(statusLabel: string, players: PlayerProps[]) {
  return players.length > 0 ? (
    <StatusSection players={players} statusLabel={statusLabel} />
  ) : null;
}

export default LeagueDetail;
