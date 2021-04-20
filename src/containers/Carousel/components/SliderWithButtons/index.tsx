import React, { FunctionComponent } from "react";
import styles from "./index.module.css";
import Slider from "../Slider";

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
  width: number;
  onSliderTransitionEnd: () => void;
  clickOnRightArrow: () => void;
  clickOnLeftArrow: () => void;
}

const sliderWithButtons: FunctionComponent<Props> = ({
  content,
  transformIndex,
  isTransitionEnabled,
  onSliderTransitionEnd,
  clickOnLeftArrow,
  clickOnRightArrow,
  inTransition,
  direction,
  cardPercentualSize,
  width,
}) => (
  <Slider
    transformIndex={transformIndex}
    cardPercentualSize={cardPercentualSize}
    content={content}
    direction={direction}
    inTransition={inTransition}
    isTransitionEnabled={isTransitionEnabled}
    onSliderTransitionEnd={onSliderTransitionEnd}
    dataTestid="slider"
    width={width}
    className={styles.slider}
  >
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
  </Slider>
);

export default sliderWithButtons;
