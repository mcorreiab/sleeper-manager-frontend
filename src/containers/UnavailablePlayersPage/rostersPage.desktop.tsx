import classNames from "classnames";
import Image from "next/image";
import { PlayersOverview, Summary } from "./components";
import { Props } from "./rosterProps";
import {
  getCondensedDataOfRosters,
  getPlayersByStatus,
} from "./rosterQuantities";

const RostersPage: React.FunctionComponent<Props> = ({
  user,
  userAvatarUrl,
  rosters,
}) => {
  const { totalOfPlayers, numberOfLeagues } =
    getCondensedDataOfRosters(rosters);

  const userRosters = rosters.map((roster) => {
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
  });

  return (
    <nav className="bg-[#292E3C] w-[328px]">
      <Summary
        numberOfLeagues={numberOfLeagues}
        totalOfPlayers={totalOfPlayers}
        summaryCardClassName="bg-[#1F20277A] px-6"
        username={user}
        userAvatarUrl={userAvatarUrl}
        ruleColor="border-[#34D4AA]"
        className="pt-6 mx-6 mb-10"
      />
      <section>
        <h1 className="font-bold text-sm-white mx-6">Leagues to review</h1>
        <ul>{userRosters}</ul>
      </section>
    </nav>
  );
};

export default RostersPage;
