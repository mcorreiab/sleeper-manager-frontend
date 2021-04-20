import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Carousel, { ContentProps } from "../index";

const createContent = (text: string): ContentProps => ({
  key: text,
  element: <div>{text}</div>,
});

const createLines = (firstLine: string, secondLine: string) => ({
  primaryContent: createContent(firstLine),
  secondaryContent: createContent(secondLine),
});

const firstContentFirstLine = "firstContentFirstLine";
const firstContentSecondaryLine = "firstContentSecondaryLine";
const firstContent = createLines(
  firstContentFirstLine,
  firstContentSecondaryLine
);

const secondContentFirstLine = "secondContentFirstLine";
const secondContentSecondaryLine = "secondContentSecondaryLine";
const secondContent = createLines(
  secondContentFirstLine,
  secondContentSecondaryLine
);

const thirdContentFirstLine = "thirdContentFirstLine";
const thirdContentSecondaryLine = "thirdContentSecondaryLine";
const thirdContent = createLines(
  thirdContentFirstLine,
  thirdContentSecondaryLine
);

const content = [firstContent, secondContent, thirdContent];

const renderCarousel = () => render(<Carousel content={content} />);

describe("Carousel test", () => {
  it("should render the content with success", () => {
    renderCarousel();

    expect(screen.queryByText(firstContentFirstLine)).toBeInTheDocument();
    expect(screen.queryByText(firstContentSecondaryLine)).toBeInTheDocument();
    expect(screen.queryByText(secondContentFirstLine)).toBeInTheDocument();
    expect(screen.queryByText(secondContentSecondaryLine)).toBeInTheDocument();
    expect(screen.queryAllByText(thirdContentFirstLine).length).toEqual(2);
    expect(screen.queryAllByText(thirdContentSecondaryLine).length).toEqual(2);
  });

  it("when clicks on right button should move carousel to the next card", async () => {
    renderCarousel();

    const rightButton = screen.getByAltText("Right button");
    fireEvent.click(rightButton);

    const slider = screen.getByTestId("slider");
    fireEvent.transitionEnd(slider);

    expect(screen.queryByText(thirdContentFirstLine)).toBeInTheDocument();
    expect(screen.queryByText(thirdContentSecondaryLine)).toBeInTheDocument();
    expect(screen.queryByText(secondContentFirstLine)).toBeInTheDocument();
    expect(screen.queryByText(secondContentSecondaryLine)).toBeInTheDocument();
    expect(screen.queryAllByText(firstContentFirstLine).length).toEqual(2);
    expect(screen.queryAllByText(firstContentFirstLine).length).toEqual(2);
  });

  it("when clicks on left button should move carousel to the next card", async () => {
    renderCarousel();

    const leftButton = screen.getByAltText("Left button");
    fireEvent.click(leftButton);

    const slider = screen.getByTestId("slider");
    fireEvent.transitionEnd(slider);

    expect(screen.queryByText(thirdContentFirstLine)).toBeInTheDocument();
    expect(screen.queryByText(thirdContentSecondaryLine)).toBeInTheDocument();
    expect(screen.queryByText(firstContentFirstLine)).toBeInTheDocument();
    expect(screen.queryByText(firstContentSecondaryLine)).toBeInTheDocument();
    expect(screen.queryAllByText(secondContentFirstLine).length).toEqual(2);
    expect(screen.queryAllByText(secondContentSecondaryLine).length).toEqual(2);
  });
});
