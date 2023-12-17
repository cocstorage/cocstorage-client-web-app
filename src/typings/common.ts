export type Id = string | number | undefined;

declare global {
  interface Window {
    appScreenContent: HTMLDivElement;
  }
}
