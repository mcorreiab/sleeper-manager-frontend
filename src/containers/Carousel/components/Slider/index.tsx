import React, { FunctionComponent, TransitionEventHandler } from "react";
import classnames from "classnames";
import styles from "./index.module.css";

export interface ContentProps {
  key: string;
  element: React.ReactNode;
}

export interface Props {
  transformIndex: number;
  isTransitionEnabled: boolean;
  content: ContentProps[];
  inTransition: boolean;
  direction: string;
  cardPercentualSize: number;
  onSliderTransitionEnd: () => void;
  dataTestid?: string;
  width: number;
  className?: string;
}

const childrenOnTransitionEnd: TransitionEventHandler<HTMLDivElement> = (
  event
) => {
  event.stopPropagation();
};

const slider: FunctionComponent<Props> = ({
  content,
  transformIndex,
  isTransitionEnabled,
  onSliderTransitionEnd,
  inTransition,
  direction,
  cardPercentualSize,
  children,
  dataTestid,
  width,
  className,
}) => {
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
  const mountContent = () =>
    content.map(({ element, key }, index) => {
      let contentClasses: string = styles.carouselItem;
      const indexToShow = getIndexToShow();

      if (index !== indexToShow) {
        contentClasses = classnames(styles.carouselItem, styles.disappear);
      }

      return (
        <div
          key={`${key}${index}`}
          className={contentClasses}
          style={{ flexBasis: `${cardPercentualSize}%` }}
          onTransitionEnd={childrenOnTransitionEnd}
        >
          {element}
        </div>
      );
    });
  /* eslint-enable react/no-array-index-key */

  return (
    <div className={styles.carousel}>
      <div
        className={classnames(className, styles.slider)}
        style={{
          transform: `translateX(${transformIndex}%)`,
          transition: isTransitionEnabled ? undefined : "none",
          width: `${width}%`,
        }}
        onTransitionEnd={
          isTransitionEnabled ? onSliderTransitionEnd : undefined
        }
        data-testid={dataTestid}
      >
        {mountContent()}
      </div>
      {children}
    </div>
  );
};

export default slider;
