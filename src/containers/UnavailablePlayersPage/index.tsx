import { useRouter } from "next/router";
import Header from "@/components/Header";
import { UserInformation, Summary, LeagueInformation } from "./components";
import styles from "./index.module.css";

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
  type: string;
  players: PlayerProps[];
}

export interface Props {
  userAvatarUrl: string;
  rosters: RosterProps[];
}

const unavailablePlayersPage: React.FunctionComponent<Props> = ({
  userAvatarUrl,
  rosters,
}) => {
  const router = useRouter();
  const { user } = router.query;

  const numberOfLeagues = rosters.length;

  let totalOfPlayers = 0;
  if (numberOfLeagues > 0) {
    totalOfPlayers = rosters
      .map((roster) => roster.players.length)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  let component;

  if (totalOfPlayers > 0) {
    const leagues = rosters.map((roster) => (
      <LeagueInformation key={roster.name} roster={roster} />
    ));

    component = (
      <>
        <h1 className={styles.leagueTitle}>Leagues to review</h1>
        {leagues}
      </>
    );
  } else {
    component = (
      <>
        <p style={{ marginTop: "1rem", fontWeight: 700 }}>Nothing to show</p>
        <p style={{ marginTop: "0.5rem" }}>All your players are up to go!</p>
      </>
    );
  }

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
          <section>{component}</section>
        </main>
      </div>
    </div>
  );
};

export default unavailablePlayersPage;
