
type buttonProps = {
    label: string,
    onClick: () => void;
}

export function Button({label, onClick}: buttonProps) {
    return(
        <button onClick={onClick}>{label}</button>
    )
}