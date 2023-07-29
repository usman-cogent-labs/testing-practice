import {render, screen} from '@testing-library/react'
import Greet from './greet'


test('Greet renders perfectly', () => {
   render(<Greet/>)
   const textElement = screen.getByText(/greetings/i);
   expect(textElement).toBeInTheDocument();
})

test('Greet by name', () => {
    render(<Greet name="Usman"/>)
    const textElement = screen.getByText('Greetings Usman');
    expect(textElement).toBeInTheDocument();
})