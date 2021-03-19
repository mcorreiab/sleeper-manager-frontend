import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./index.module.css";
import LeagueCard from "../UnavailablePlayersPage/components/LeagueCard";

export interface RosterProps {
  name: string;
  size: number;
  avatarUrl: string;
  type: string;
}

export interface Props {
  rosters: RosterProps[];
}

const cardPercentualSize = 12;
const rightDistancePercentualSize = 5.6;
const transformDislocation =
  cardPercentualSize * 2 + rightDistancePercentualSize;

const leagueCarousel: FunctionComponent<Props> = ({ rosters }) => {
  const [transformIndex, setTransformIndex] = useState(-cardPercentualSize);
  const [rostersToShow, setRostersToShow] = useState(
    [rosters[rosters.length - 1]].concat(rosters)
  );
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [inTransition, setInTransition] = useState(false);

  useEffect(() => {
    if (!inTransition) {
      setIsTransitionEnabled(true);
    }
  }, [inTransition]);

  const mountRightDirectionRoster = (): RosterProps[] => {
    const lastSelectedCard = rostersToShow[1];
    return [lastSelectedCard]
      .concat(rostersToShow.slice(2))
      .concat(lastSelectedCard);
  };

  const mountLeftDirectionRoster = (): RosterProps[] => {
    const previousCard = rostersToShow[rostersToShow.length - 2];
    const selectedCard = rostersToShow[0];
    return [previousCard, selectedCard].concat(
      rostersToShow.slice(1, rostersToShow.length - 1)
    );
  };

  const mountNewRosters = (): RosterProps[] => {
    if (direction === "right") {
      return mountRightDirectionRoster();
    }

    return mountLeftDirectionRoster();
  };

  const onSliderTransitionEnd = () => {
    setIsTransitionEnabled(false);
    setRostersToShow(mountNewRosters());
    setInTransition(false);
    setTransformIndex(-cardPercentualSize);
  };

  const clickOnRightArrow = () => {
    setTransformIndex(-transformDislocation);
    setInTransition(true);
    setDirection("right");
  };

  const clickOnLeftArrow = () => {
    setTransformIndex(rightDistancePercentualSize);
    setInTransition(true);
    setDirection("left");
  };

  const getIndexToShow = (): number => {
    if (!inTransition) {
      return 1;
    }

    if (direction === "right") {
      return 2;
    }

    return 0;
  };

  /* eslint-disable react/no-array-index-key */
  const mountRosterComponents = (): JSX.Element[] =>
    rostersToShow.map((roster, index) => {
      let className: string = styles.carouselItem;
      const indexToShow = getIndexToShow();

      if (index !== indexToShow) {
        className = classnames(styles.carouselItem, styles.disappear);
      }

      return (
        <div
          key={`${roster.name}${index}`}
          className={className}
          style={{ flexBasis: `${cardPercentualSize}%` }}
        >
          <LeagueCard
            name={roster.name}
            avatarUrl={roster.avatarUrl}
            size={roster.size}
            type={roster.type}
          />
        </div>
      );
    });
  /* eslint-enable react/no-array-index-key */

  return (
    <div className={styles.carousel}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(${transformIndex}%)`,
          transition: isTransitionEnabled ? undefined : "none",
          width: `${
            rostersToShow.length * 51 + (rostersToShow.length - 1) * 25
          }%`,
        }}
        onTransitionEnd={
          isTransitionEnabled ? onSliderTransitionEnd : undefined
        }
        data-testid="slider"
      >
        {mountRosterComponents()}
      </div>
      <button
        className={styles.leftArrow}
        onClick={clickOnLeftArrow}
        type="button"
      >
        <img src="/left-arrow.svg" alt="Left button" />
      </button>
      <button
        className={styles.rightArrow}
        onClick={clickOnRightArrow}
        type="button"
      >
        <img src="/right-arrow.svg" alt="Right button" />
      </button>
    </div>
  );
};

export default leagueCarousel;
