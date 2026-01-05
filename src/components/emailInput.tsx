import { useState } from "react"

export function EmailInput() {

    const [email, setEmail] = useState('');

    return(
        <>
        <input type="email" value={email} 
            onChange={(e) => {setEmail(e.target.value);}} />
        <p> {email} </p>
        </>
    )
}