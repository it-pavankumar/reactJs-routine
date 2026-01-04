type headerProps = {
    title: string
}

export function Header({title}: headerProps) {
    return(
        <h1>{title}</h1>
    )
}