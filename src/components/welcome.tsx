
type welcomeProps = {
    name: string;
}

export function Welcome({name}: welcomeProps) {
    return(
        <h2> this is to welcome, {name}</h2>
    )
}