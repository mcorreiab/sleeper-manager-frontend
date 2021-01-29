import { Screen } from "@testing-library/react";

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveACompleteHeader(): R;
    }
  }
}
