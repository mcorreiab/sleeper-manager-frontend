import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import UserInformation from "./components/UserInformation";
import styles from "./index.module.css";

interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
}

interface Props {
  avatarUrl: string;
  rosters: RosterProps;
}

const unavailablePlayersPage: FunctionComponent<Props> = ({
  avatarUrl,
  rosters,
}) => {
  const router = useRouter();
  const { user } = router.query;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <UserInformation avatarUrl={avatarUrl} username={user as string} />
        <div className={styles.leagueCarousel}>
          <div className={styles.leftArrow}>
            <img src="/left-arrow.svg" alt="left arrow" />
          </div>
          <div className={styles.leagueCard}>
            <img
              src={rosters.avatarUrl}
              alt="League avatar"
              className={styles.leagueImage}
            />
            <p className={styles.leagueName}>{rosters.name}</p>
            <p className={styles.leagueDetails}>
              {rosters.size} teams | {rosters.type}
            </p>
          </div>
          <div className={styles.rightArrow}>
            <img src="/right-arrow.svg" alt="right arrow" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default unavailablePlayersPage;
