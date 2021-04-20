import React, { FunctionComponent, useState, useEffect } from "react";
import { SliderWithButtons, Slider } from "./components";
import styles from "./index.module.css";

export interface ContentProps {
  key: string;
  element: React.ReactNode;
}

export interface FullContentProps {
  primaryContent: ContentProps;
  secondaryContent: ContentProps;
}

export interface Props {
  content: FullContentProps[];
}

const mountCarouselDistances = (
  contentSize: number,
  contentPercentualSize: number,
  contentDistance: number
) => {
  const sliderSize =
    (contentSize + 1) * contentPercentualSize + contentSize * contentDistance;
  const cardPercentualSize = (contentPercentualSize / sliderSize) * 100;
  const contentPercentualDistance = (contentDistance / sliderSize) * 100;
  return {
    sliderSize,
    cardPercentualSize,
    contentPercentualDistance,
    contentDislocation: cardPercentualSize * 2 + contentPercentualDistance,
  };
};

const leagueCarousel: FunctionComponent<Props> = ({ content }) => {
  const primaryCarouselDistances = mountCarouselDistances(
    content.length,
    51,
    25
  );

  const secondaryCarouselDistances = mountCarouselDistances(
    content.length,
    87,
    7
  );

  const [
    primaryCarouselTransformIndex,
    setPrimaryCarouselTransformIndex,
  ] = useState(-primaryCarouselDistances.cardPercentualSize);
  const [
    secondaryCarouselTransformIndex,
    setSecondaryCarouselTransformIndex,
  ] = useState(-secondaryCarouselDistances.cardPercentualSize);
  const [contentToShow, setContentToShow] = useState(
    [content[content.length - 1]].concat(content)
  );
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [inTransition, setInTransition] = useState(false);

  useEffect(() => {
    if (!inTransition) {
      setIsTransitionEnabled(true);
    }
  }, [inTransition]);

  const mountRightDirectionContent = (): FullContentProps[] => {
    const lastSelectedCard = contentToShow[1];
    return [lastSelectedCard]
      .concat(contentToShow.slice(2))
      .concat(lastSelectedCard);
  };

  const mountLeftDirectionContent = (): FullContentProps[] => {
    const previousCard = contentToShow[contentToShow.length - 2];
    const selectedCard = contentToShow[0];
    return [previousCard, selectedCard].concat(
      contentToShow.slice(1, contentToShow.length - 1)
    );
  };

  const mountNewContent = (): FullContentProps[] => {
    if (direction === "right") {
      return mountRightDirectionContent();
    }

    return mountLeftDirectionContent();
  };

  const onSliderTransitionEnd = () => {
    setIsTransitionEnabled(false);
    setContentToShow(mountNewContent());
    setInTransition(false);
    setPrimaryCarouselTransformIndex(
      -primaryCarouselDistances.cardPercentualSize
    );
    setSecondaryCarouselTransformIndex(
      -secondaryCarouselDistances.cardPercentualSize
    );
  };

  const clickOnRightArrow = () => {
    setPrimaryCarouselTransformIndex(
      -primaryCarouselDistances.contentDislocation
    );
    setSecondaryCarouselTransformIndex(
      -secondaryCarouselDistances.contentDislocation
    );
    setInTransition(true);
    setDirection("right");
  };

  const clickOnLeftArrow = () => {
    setPrimaryCarouselTransformIndex(
      primaryCarouselDistances.contentPercentualDistance
    );
    setSecondaryCarouselTransformIndex(
      secondaryCarouselDistances.contentPercentualDistance
    );
    setInTransition(true);
    setDirection("left");
  };

  return (
    <>
      <SliderWithButtons
        transformIndex={primaryCarouselTransformIndex}
        cardPercentualSize={primaryCarouselDistances.cardPercentualSize}
        clickOnLeftArrow={clickOnLeftArrow}
        clickOnRightArrow={clickOnRightArrow}
        content={contentToShow.map((contents) => contents.primaryContent)}
        isTransitionEnabled={isTransitionEnabled}
        direction={direction}
        inTransition={inTransition}
        onSliderTransitionEnd={onSliderTransitionEnd}
        width={primaryCarouselDistances.sliderSize}
      />
      <p className={styles.playerFirstSection}>Players to change now</p>
      <Slider
        transformIndex={secondaryCarouselTransformIndex}
        cardPercentualSize={secondaryCarouselDistances.cardPercentualSize}
        content={contentToShow.map((contents) => contents.secondaryContent)}
        isTransitionEnabled={isTransitionEnabled}
        direction={direction}
        inTransition={inTransition}
        onSliderTransitionEnd={onSliderTransitionEnd}
        width={secondaryCarouselDistances.sliderSize}
      />
    </>
  );
};

export default leagueCarousel;
