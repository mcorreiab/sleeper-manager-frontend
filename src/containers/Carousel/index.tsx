import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

export interface ContentProps {
  key: string;
  element: React.ReactNode;
}

export interface Props {
  content: ContentProps[];
}

const cardPercentualSize = 12;
const rightDistancePercentualSize = 5.6;
const transformDislocation =
  cardPercentualSize * 2 + rightDistancePercentualSize;

const leagueCarousel: FunctionComponent<Props> = ({ content: contents }) => {
  const [transformIndex, setTransformIndex] = useState(-cardPercentualSize);
  const [contentToShow, setContentToShow] = useState(
    [contents[contents.length - 1]].concat(contents)
  );
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [inTransition, setInTransition] = useState(false);

  useEffect(() => {
    if (!inTransition) {
      setIsTransitionEnabled(true);
    }
  }, [inTransition]);

  const mountRightDirectionContent = (): ContentProps[] => {
    const lastSelectedCard = contentToShow[1];
    return [lastSelectedCard]
      .concat(contentToShow.slice(2))
      .concat(lastSelectedCard);
  };

  const mountLeftDirectionContent = (): ContentProps[] => {
    const previousCard = contentToShow[contentToShow.length - 2];
    const selectedCard = contentToShow[0];
    return [previousCard, selectedCard].concat(
      contentToShow.slice(1, contentToShow.length - 1)
    );
  };

  const mountNewContent = (): ContentProps[] => {
    if (direction === "right") {
      return mountRightDirectionContent();
    }

    return mountLeftDirectionContent();
  };

  const onSliderTransitionEnd = () => {
    setIsTransitionEnabled(false);
    setContentToShow(mountNewContent());
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
  const mountContent = (): JSX.Element[] =>
    contentToShow.map((content, index) => {
      let className: string = styles.carouselItem;
      const indexToShow = getIndexToShow();

      if (index !== indexToShow) {
        className = classnames(styles.carouselItem, styles.disappear);
      }

      return (
        <div
          key={`${content.key}${index}`}
          className={className}
          style={{ flexBasis: `${cardPercentualSize}%` }}
        >
          {content.element}
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
            contentToShow.length * 51 + (contentToShow.length - 1) * 25
          }%`,
        }}
        onTransitionEnd={
          isTransitionEnabled ? onSliderTransitionEnd : undefined
        }
        data-testid="slider"
      >
        {mountContent()}
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
