import React, {useState} from "react";

export function Button() {

    let[a, setA] = useState(0)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    return (
        <div>
            {a}
            <button onClick={onClickHandler}>click</button>
        </div>
    )
}