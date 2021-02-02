declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveACompleteHeader(): R;
    }
  }
}
