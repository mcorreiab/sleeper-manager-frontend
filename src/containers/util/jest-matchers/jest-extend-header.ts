import { Screen } from "@testing-library/react";

expect.extend({
  toHaveACompleteHeader(received: Screen) {
    const title = received.queryByText("Sleeper Manager");
    if (!title) {
      return {
        message: () => "Expected header title to be present",
        pass: false,
      };
    }

    const githubLogo = received.queryByAltText("The logo from github webpage");

    if (!githubLogo) {
      return {
        message: () => "Expected github logo to be present",
        pass: false,
      };
    }

    const infoCircle = received.queryByAltText(
      "A circle with an exclamation point"
    );

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
