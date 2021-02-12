import React, { FunctionComponent } from "react";
import styles from "./index.module.css";
import LeagueCard from "../LeagueCard";

interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
}

interface Props {
  rosters: RosterProps[];
  rosterIndex: number;
  clickOnRightArrow: () => void;
}

const leagueCarousel: FunctionComponent<Props> = ({
  rosters,
  rosterIndex,
  clickOnRightArrow,
}) => {
  const { name, avatarUrl, size, type } = rosters[rosterIndex];
  return (
    <div className={styles.leagueCarousel}>
      <button className={styles.leftArrow} type="button">
        <img src="/left-arrow.svg" alt="left arrow" />
      </button>
      <LeagueCard name={name} avatarUrl={avatarUrl} size={size} type={type} />
      <button
        className={styles.rightArrow}
        onClick={clickOnRightArrow}
        onKeyDown={clickOnRightArrow}
        type="button"
      >
        <img src="/right-arrow.svg" alt="right arrow" />
      </button>
    </div>
  );
};

export default leagueCarousel;
