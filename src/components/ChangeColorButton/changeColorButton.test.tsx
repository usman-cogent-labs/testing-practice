import { screen, render, fireEvent } from "@testing-library/react";
import ChangeColorButton from "./ChangeColorButton";

describe("ChangeColorButton", () => {
    test("renders perfectly", () => {
        render(<ChangeColorButton/>)
        const changeColorButton = screen.getByRole("button");
        expect(changeColorButton).toBeInTheDocument();
    })

    test("to have red as initial color", () => {
        render(<ChangeColorButton/>);
        const chnageColorButton = screen.getByRole("button", {name: /change to blue/i});
        expect(chnageColorButton).toHaveStyle({backgroundColor : 'red'});
    })

    test("have blue color when clicked", () => {
        render(<ChangeColorButton/>);
        const changeColorButton = screen.getByRole("button", {name : /change to blue/i});
        fireEvent.click(changeColorButton);

        expect(changeColorButton).toHaveStyle({backgroundColor : "blue"})

        expect(changeColorButton.textContent).toBe('Change to red')
    })

})
