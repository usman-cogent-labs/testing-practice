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

    test('to be enbabled initially', () => {
        render(<ChangeColorButton/>);
        const colorButton = screen.getByRole('button', {name : /change to blue/i});

        expect(colorButton).toBeEnabled();

        const checkBox = screen.getByRole('checkbox', {name : /disable button/i});

        expect(checkBox).not.toBeChecked();
    })

    test('to be disabled when checkbox is clicked', () => {
        render(<ChangeColorButton />);
        const colorButton = screen.getByRole('button');
        const checkBox = screen.getByRole('checkbox', { name: /disable button/i });

        fireEvent.click(checkBox);
        expect(colorButton).toBeDisabled();

        fireEvent.click(checkBox);
        expect(colorButton).toBeEnabled();

    })

    test('to be gray when disbaled', () => {
        render(<ChangeColorButton/>);

        const button = screen.getByRole('button');
        const checkbox = screen.getByRole('checkbox', {name : /disable button/i});

        fireEvent.click(checkbox);
        expect(button).toHaveStyle({backgroundColor : 'gray'})
})
})
