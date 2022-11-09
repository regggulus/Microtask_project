import React, {MouseEvent} from "react";


export function MyButton() {
    const buttonClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hi")
    }
    return (
        <div>
            <button onClick={buttonClick}>Click Me</button>
        </div>
    )
}