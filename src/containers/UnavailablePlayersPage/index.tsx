import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
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
      <div className={styles.header}>
        <Header />
      </div>
      <main>
        <div className={styles.userInformation}>
          <img
            className={styles.userAvatar}
            src={avatarUrl}
            alt="User avatar"
          />
          <span className={styles.username}>{user}</span>
        </div>
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
