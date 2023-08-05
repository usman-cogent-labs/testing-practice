import { useMemo, useState } from "react"

export default function ChangeColorButton(){
    const [buttonColor, setButtonColor] = useState('red');

    const buttonText = useMemo(() => {
        if (buttonColor === 'red') return 'Change to blue';
        else if (buttonColor === 'blue') return 'Change to red';
    }, [buttonColor])

    const handleButtonClick = () => {
        if (buttonColor === 'red') setButtonColor('blue');
        else if (buttonColor === 'blue') setButtonColor('red');
    }

    return <button style={{backgroundColor : buttonColor}} onClick={handleButtonClick}>{buttonText}</button>
}