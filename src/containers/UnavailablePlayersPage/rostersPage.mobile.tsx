import Header from "@/components/Header";
import classNames from "classnames";
import { Summary, LeagueInformation } from "./components";
import { Props } from "./rosterProps";
import { getCondensedDataOfRosters } from "./rosterQuantities";

const RostersPage: React.FunctionComponent<Props> = ({
  user,
  rosters,
  userAvatarUrl,
}) => {
  const { totalOfPlayers, numberOfLeagues } =
    getCondensedDataOfRosters(rosters);

  const createPageDetails = () => {
    const styles = classNames("font-bold", "text-sm", "mt-8", "mx-0", "mb-4");

    if (totalOfPlayers > 0) {
      const leagues = rosters.map((roster) => (
        <LeagueInformation key={roster.name} roster={roster} />
      ));

      return (
        <>
          <h1 className={styles}>Leagues to review</h1>
          {leagues}
        </>
      );
    }

    return (
      <>
        <h1 className={styles}>Nothing to show</h1>
        <p>All your players are up to go!</p>
      </>
    );
  };

  return (
    <div className="h-full bg-background-color overflow-auto">
      <div className="mt-4 mx-default-spacing mb-0 text-sm-lightwhite">
        <header className="mb-[1.625rem]">
          <Header />
        </header>
        <main>
          <Summary
            userAvatarUrl={userAvatarUrl}
            username={user}
            numberOfLeagues={numberOfLeagues}
            totalOfPlayers={totalOfPlayers}
            summaryCardClassName="bg-sm-blue px-8"
            ruleColor="border-[#5e49dc]"
          />
          <section>{createPageDetails()}</section>
        </main>
      </div>
    </div>
  );
};

export default RostersPage;
