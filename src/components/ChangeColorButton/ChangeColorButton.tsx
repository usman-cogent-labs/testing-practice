import { useMemo, useState } from "react"

export default function ChangeColorButton(){
    const [buttonColor, setButtonColor] = useState('red');
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const buttonText = useMemo(() => {
        if (buttonColor === 'red') return 'Change to blue';
        else if (buttonColor === 'blue') return 'Change to red';
    }, [buttonColor])

    const handleButtonClick = () => {
        if (buttonColor === 'red') setButtonColor('blue');
        else if (buttonColor === 'blue') setButtonColor('red');
    }

    return (
    <>
        <div>
            <input type="checkbox" id="checkbox"  onChange={() => setButtonDisabled(!buttonDisabled)}/>
            <label htmlFor="checkbox">Disable Button</label>
        </div>
        <button style={{backgroundColor : buttonDisabled ? 'gray' : buttonColor, color : 'white'}} onClick={handleButtonClick} disabled={buttonDisabled}>{buttonText}</button>
    </>
    )
}