import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import { Summary, LeagueDetail } from "./components";
import RosterCard from "./components/RosterCard";
import { Props } from "./rosterProps";
import { getCondensedDataOfRosters } from "./rosterQuantities";

const RostersPage: React.FunctionComponent<Props> = ({
  user,
  userAvatarUrl,
  rosters,
}) => {
  const rostersRef = useRef<Array<HTMLElement>>([]);
  const [selectedRoster, setSelectedRoster] = useState(0);

  useEffect(() => {
    rostersRef.current = rostersRef.current.slice(0, rosters.length);
  }, [rosters]);

  const clickOnRosterCard = (index: number) => {
    setSelectedRoster(index);
    rostersRef.current[index].scrollIntoView();
  };

  const { totalOfPlayers, numberOfLeagues } =
    getCondensedDataOfRosters(rosters);

  return (
    <div className="bg-background-color flex h-screen">
      <aside className="bg-sm-dark-blue w-[328px] overflow-auto scrollbar scrollbar-dark">
        <Summary
          numberOfLeagues={numberOfLeagues}
          totalOfPlayers={totalOfPlayers}
          summaryCardClassName="bg-[#1F20277A] px-6"
          username={user}
          userAvatarUrl={userAvatarUrl}
          ruleColor="border-[#34D4AA]"
          className="pt-6 mx-6 mb-10"
        />
        <section className="mb-[4.125rem]">
          <h1 className="font-bold text-sm-white mx-6">Leagues to review</h1>
          <ul>
            {rosters.map((roster, i) => (
              <RosterCard
                key={roster.name}
                roster={roster}
                onClick={() => {
                  clickOnRosterCard(i);
                }}
                isSelected={i === selectedRoster}
              />
            ))}
          </ul>
        </section>
        <section className="mx-6 pb-6">
          <Header />
        </section>
      </aside>
      <main className="px-12 py-6 overflow-auto scrollbar scrollbar-light w-[calc(100%-328px)]">
        {rosters.map((roster, i) => (
          <LeagueDetail
            innerRef={(el) => el && (rostersRef.current[i] = el)}
            key={roster.name}
            roster={roster}
            className="mb-[3.75rem]"
          />
        ))}
      </main>
    </div>
  );
};

export default RostersPage;
