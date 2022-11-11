import React, {useState} from "react";

export function Button() {

    let [a, setA] = useState(0)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickReset = () => {
        setA(a = 0)
        console.log(a)
    }
    return (
        <div>
            {a}
            <button onClick={onClickHandler}>click</button>
            <button onClick={onClickReset}>Reset</button>
        </div>
    )
}