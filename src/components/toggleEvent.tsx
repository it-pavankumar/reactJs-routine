import { useState } from "react";


export function Toggle() {

    const [isOn, setToggle] = useState(false);

    const OnToggle = () => {
        setToggle(isOn => !isOn);
    }

    return(
        <>
            <button onClick={OnToggle}>{isOn ? 'ON' : 'OFF'}</button>
        </>
    )
}