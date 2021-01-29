import { screen } from "@testing-library/react";

expect.extend({
  toHaveACompleteHeader() {
    const title = screen.queryByText("Sleeper Manager");
    if (!title) {
      return {
        message: () => "Expected header title to be present",
        pass: false,
      };
    }

    const githubLogo = screen.queryByAltText("github logo");

    if (!githubLogo) {
      return {
        message: () => "Expected github logo to be present",
        pass: false,
      };
    }

    const infoCircle = screen.queryByAltText("info circle");

    if (!infoCircle) {
      return {
        message: () => "Expected info circle to be present",
        pass: false,
      };
    }

    return {
      message: () => "Header is complete",
      pass: true,
    };
  },
});

export {};
