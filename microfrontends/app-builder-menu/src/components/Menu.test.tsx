import { render } from "@testing-library/react";
import { Menu } from "./Menu";

describe("Menu Test", () => {
    it("must be rendered", () => {
        const { getByText } = render(<Menu/>)

        expect(getByText("This is the menu")).toBeInTheDocument()
    })

    it("should match snapshot", () => {
        const { container } = render(<Menu/>)

        expect(container).toMatchSnapshot()
    })
})
