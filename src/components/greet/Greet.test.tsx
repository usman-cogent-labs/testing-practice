import {render, screen} from '@testing-library/react'
import Greet from './Greet';

describe('Greet', () => {
    test('renders perfectly', () => {
       render(<Greet/>)
       const textElement = screen.getByText(/greetings/i);
       expect(textElement).toBeInTheDocument();
    })
    
    test('renders a name', () => {
        render(<Greet name="Usman"/>)
        const textElement = screen.getByText('Greetings Usman');
        expect(textElement).toBeInTheDocument();
    })
})