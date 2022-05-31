import { AppBuilderMenu } from "./custom-element";

if (process.env.NODE_ENV === "development") {
  const { worker } = await import("../mocks/browser");

  await worker.start();
}

customElements.define("app-builder-menu", AppBuilderMenu);
