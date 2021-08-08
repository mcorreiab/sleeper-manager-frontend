import { useRouter } from "next/router";
import Header from "@/components/Header";
import { UserInformation, Summary } from "./components";
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

  const rosterInfo = rosters.map((roster) => (
    <h2 key={roster.name}>{roster.name}</h2>
  ));

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
              <Summary rosters={rosters} />
            </section>
          </section>
          <section>
            <h1 className={styles.leagueTitle}>Leagues to review</h1>
            {rosterInfo}
          </section>
        </main>
      </div>
    </div>
  );
};

export default unavailablePlayersPage;
