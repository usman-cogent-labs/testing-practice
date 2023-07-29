type propTypes = {
    name? : string
}

export default function Greet(props: propTypes){
    return <h1>Greetings {props.name}</h1>
}