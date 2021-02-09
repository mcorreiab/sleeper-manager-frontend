import React from "react";
import styles from "./index.module.css";

interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
}

const leagueCarousel = ({ name, size, avatarUrl, type }: RosterProps) => {
  return (
    <div className={styles.leagueCarousel}>
      <div className={styles.leftArrow}>
        <img src="/left-arrow.svg" alt="left arrow" />
      </div>
      <div className={styles.leagueCard}>
        <img
          src={avatarUrl}
          alt="League avatar"
          className={styles.leagueImage}
        />
        <p className={styles.leagueName}>{name}</p>
        <p className={styles.leagueDetails}>
          {size} teams | {type}
        </p>
      </div>
      <div className={styles.rightArrow}>
        <img src="/right-arrow.svg" alt="right arrow" />
      </div>
    </div>
  );
};

export default leagueCarousel;