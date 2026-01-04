
type user = {
    name: string,
    role: string,
    id: number
}

type userProps = {
    user: user,
}

export function UserCard({user}: userProps) {
    return(
        <>
            <h2>{user.name}</h2>
            <p>{user.role}</p>
            <p>{user.id}</p>
        </>
    )
}