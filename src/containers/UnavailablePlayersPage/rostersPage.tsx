import Header from "@/components/Header";
import classNames from "classnames";
import { UserInformation, Summary, LeagueInformation } from "./components";

export interface PlayerProps {
  id: string;
  name: string;
  injuryStatus: string;
  position: string;
  team: string;
}

export interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  players: PlayerProps[];
}

export interface Props {
  user: string;
  userAvatarUrl: string;
  rosters: RosterProps[];
}

const RostersPage: React.FunctionComponent<Props> = ({
  user,
  rosters,
  userAvatarUrl,
}) => {
  const numberOfLeagues = rosters.length;

  let totalOfPlayers = 0;
  if (numberOfLeagues > 0) {
    totalOfPlayers = rosters
      .map((roster) => roster.players.length)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }

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
          <section aria-label="User situation overview">
            <UserInformation
              avatarUrl={userAvatarUrl}
              username={user as string}
            />
            <section
              aria-label="Player's leagues and players overview"
              className="mt-5"
            >
              <Summary
                leaguesTotal={numberOfLeagues}
                playersTotal={totalOfPlayers}
              />
            </section>
          </section>
          <section>{createPageDetails()}</section>
        </main>
      </div>
    </div>
  );
};

export default RostersPage;
