import { useState } from "react"

export function SimpleForm() {
    const [name, setName] = useState('');
    const [err, setErr] = useState('');

    const formHandler = (e: { preventDefault: () => void; }) => {
        e?.preventDefault();

        if(!name.trim()) {
            setErr('Enter Name');
            return;
        }
        
        setErr('');

    }
    return(
        <>
        <form onSubmit={formHandler}>
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input type="submit" value='submit'/>
                {err && <p>{err}</p>}
        </form>
        </>
    )
}