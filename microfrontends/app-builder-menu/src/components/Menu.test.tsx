import { render, waitFor } from "@testing-library/react";
import { Menu } from "./Menu";

describe("Menu Test", () => {
  it("must be rendered", () => {
    const { getByText } = render(<Menu />);

    waitFor(() => expect(getByText("Hello world")).toBeInTheDocument());
  });
});
