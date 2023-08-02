import {render, screen} from '@testing-library/react'
import Application from './Application'

describe("Application", () => {
    test('renders correctly', () => {
        render(<Application/>);

        const applicationHeading = screen.getByRole('heading',  {
            name : 'Test Application'
        });
        expect(applicationHeading).toBeInTheDocument();

        const nameInputField = screen.getByRole('textbox');
        expect(nameInputField).toBeInTheDocument();

        const jobSelectionDropdown = screen.getByRole('combobox');
        expect(jobSelectionDropdown).toBeInTheDocument();

        const termsCheckbox = screen.getByRole('checkbox');
        expect(termsCheckbox).toBeInTheDocument();

        const nameinputField = screen.getByPlaceholderText("Full name");
        expect(nameinputField).toBeInTheDocument();

        const textParagraphg = screen.getByText(/all fields are mandatory/i);
        expect(textParagraphg).toBeInTheDocument();

        const inputFieldByValue = screen.getByDisplayValue("usman");
        expect(inputFieldByValue).toBeInTheDocument();

        const customHTMLElement = screen.getByTestId("custom-html-element");
        expect(customHTMLElement).toBeInTheDocument()

        const formSubmitButton = screen.getByRole('button');
        expect(formSubmitButton).toBeInTheDocument();
    })
})