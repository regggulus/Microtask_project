import {useState} from "react";

export const Counter = () => {
   let [count, setCount] = useState(0)
    const onClickCountHandler = () => {
       setCount(++count)
    }
    const onClickSetHandler = () => {
       setCount(0)
    }
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={onClickCountHandler}>count</button>
            <button onClick={onClickSetHandler}>set</button>
        </div>
    )
}