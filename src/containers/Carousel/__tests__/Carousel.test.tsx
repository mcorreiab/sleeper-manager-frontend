import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Carousel, { ContentProps } from "../index";

const createContent = (text: string): ContentProps => ({
  key: text,
  element: <div>{text}</div>,
});

const firstRosterName = "firstRosterName";
const firstContent = createContent(firstRosterName);

const secondRosterName = "secondRosterName";
const secondContent = createContent(secondRosterName);

const thirdRosterName = "thirdRosterName";
const thirdContent = createContent(thirdRosterName);

const content = [firstContent, secondContent, thirdContent];

describe("Carousel test", () => {
  it("should render the carousel with success", () => {
    render(<Carousel content={content} />);

    expect(screen.queryByText(firstRosterName)).toBeInTheDocument();
    expect(screen.queryByText(secondRosterName)).toBeInTheDocument();
    expect(screen.queryAllByText(thirdRosterName).length).toEqual(2);
  });

  it("when clicks on right button should move carousel to the next card", async () => {
    render(<Carousel content={content} />);
    const rightButton = screen.getByAltText("Right button");
    fireEvent.click(rightButton);

    const slider = screen.getByTestId("slider");
    fireEvent.transitionEnd(slider);

    expect(screen.queryByText(thirdRosterName)).toBeInTheDocument();
    expect(screen.queryByText(secondRosterName)).toBeInTheDocument();
    expect(screen.queryAllByText(firstRosterName).length).toEqual(2);
  });

  it("when clicks on left button should move carousel to the next card", async () => {
    render(<Carousel content={content} />);
    const leftButton = screen.getByAltText("Left button");
    fireEvent.click(leftButton);

    const slider = screen.getByTestId("slider");
    fireEvent.transitionEnd(slider);

    expect(screen.queryByText(thirdRosterName)).toBeInTheDocument();
    expect(screen.queryByText(firstRosterName)).toBeInTheDocument();
    expect(screen.queryAllByText(secondRosterName).length).toEqual(2);
  });
});
