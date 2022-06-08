import Image from "next/image";
import { RosterProps } from "../../rosterProps";
import { getPlayersByStatus } from "../../rosterQuantities";
import classNames from "classnames";
import StatusSection from "./statusSection";

interface Props {
  roster: RosterProps;
  className?: string;
}

const LeagueDetail: React.FunctionComponent<Props> = ({
  roster,
  className,
}) => {
  const { questionablePlayers, doubtfulPlayers, outPlayers } =
    getPlayersByStatus(roster);

  const out = outPlayers.length && (
    <StatusSection players={outPlayers} statusLabel="Out" />
  );
  const doubtful = doubtfulPlayers.length && (
    <StatusSection players={doubtfulPlayers} statusLabel="Doubtful" />
  );
  const questionable = questionablePlayers.length && (
    <StatusSection players={questionablePlayers} statusLabel="Questionable" />
  );

  return (
    <section key={roster.name} className={classNames(className)}>
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

export default LeagueDetail;
