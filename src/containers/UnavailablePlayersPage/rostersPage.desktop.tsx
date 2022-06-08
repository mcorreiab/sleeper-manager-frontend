import Header from "@/components/Header";
import { RostersUser, Summary, LeagueDetail } from "./components";
import { Props } from "./rosterProps";
import { getCondensedDataOfRosters } from "./rosterQuantities";

const RostersPage: React.FunctionComponent<Props> = ({
  user,
  userAvatarUrl,
  rosters,
}) => {
  const { totalOfPlayers, numberOfLeagues } =
    getCondensedDataOfRosters(rosters);

  return (
    <div className="bg-background-color flex h-screen">
      <aside className="bg-[#292E3C] w-[328px] overflow-auto scrollbar scrollbar-dark">
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
          <RostersUser rosters={rosters} />
        </section>
        <section className="mx-6 pb-6">
          <Header />
        </section>
      </aside>
      <main className="px-12 py-6 overflow-auto scrollbar scrollbar-light w-[calc(100%-328px)]">
        {rosters.map((roster) => (
          <LeagueDetail
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
