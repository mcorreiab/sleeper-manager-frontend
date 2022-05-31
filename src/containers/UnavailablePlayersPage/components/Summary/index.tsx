import SummaryInfo from "./summaryInfo";
import UserInformation from "./userInformation";

interface Props {
  userAvatarUrl: string;
  username: string;
  numberOfLeagues: number;
  totalOfPlayers: number;
  summaryCardClassName: string;
  ruleColor: string;
  className?: string;
}

const Summary: React.FunctionComponent<Props> = ({
  userAvatarUrl,
  username,
  numberOfLeagues,
  totalOfPlayers,
  summaryCardClassName,
  ruleColor,
  className,
}) => (
  <section className={className} aria-label="User situation overview">
    <UserInformation avatarUrl={userAvatarUrl} username={username} />
    <section
      aria-label="Player's leagues and players overview"
      className="mt-5"
    >
      <SummaryInfo
        leaguesTotal={numberOfLeagues}
        playersTotal={totalOfPlayers}
        className={summaryCardClassName}
        ruleColor={ruleColor}
      />
    </section>
  </section>
);

export default Summary;
