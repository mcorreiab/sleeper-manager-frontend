import Header from "@/components/Header";
import { UserInformation, Summary, LeagueInformation } from "./components";
import styles from "./rostersPage.module.css";

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

const renderedPage: React.FunctionComponent<Props> = ({
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
    if (totalOfPlayers > 0) {
      const leagues = rosters.map((roster) => (
        <LeagueInformation key={roster.name} roster={roster} />
      ));

      return (
        <>
          <h1 className={styles.detailTitle}>Leagues to review</h1>
          {leagues}
        </>
      );
    }

    return (
      <>
        <h1 className={styles.detailTitle}>Nothing to show</h1>
        <p>All your players are up to go!</p>
      </>
    );
  };

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <header className={styles.header}>
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
              className={styles.summary}
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

export default renderedPage;
