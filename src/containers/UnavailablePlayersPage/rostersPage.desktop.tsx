import { Summary } from "./components";
import { Props } from "./rosterProps";
import getSummaryOnRosters from "./getSummaryOnRosters";

const RostersPage: React.FunctionComponent<Props> = ({
  user,
  userAvatarUrl,
  rosters,
}) => {
  const { totalOfPlayers, numberOfLeagues } = getSummaryOnRosters(rosters);

  return (
    <nav className="bg-[#292E3C] w-[29%] p-6">
      <Summary
        numberOfLeagues={numberOfLeagues}
        totalOfPlayers={totalOfPlayers}
        cardOverviewColor="bg-[#1F20277A]"
        username={user}
        userAvatarUrl={userAvatarUrl}
        ruleColor="border-[#34D4AA]"
      />
    </nav>
  );
};

export default RostersPage;
