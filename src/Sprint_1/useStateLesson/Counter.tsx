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
        <table style={{border: '1px solid black',}}>
                <tr >
                <th style={{border: '1px solid black', display: 'flex', justifyContent: 'center', textAlign: 'center'}}><h3>{count}</h3>
                </th>
            </tr>
            <tr>
                <td>
                    <button onClick={onClickCountHandler}>count</button>
                </td>
                <td>
                    <button onClick={onClickSetHandler}>set</button>

                </td>
            </tr>

        </table>
    )
}