import React, {MouseEvent} from 'react'


export const ButtonUniversal = () => {
    const onClickOneHandler = (event: MouseEvent<HTMLButtonElement>) => {
       alert('Hello samurai')}
    const onClickTwoHandler = () => {alert('Hello World!')}
    return (
        <div>
            <button onClick={onClickOneHandler}>one</button>
            <button onClick={onClickTwoHandler} type="submit">two</button>
        </div>
    )
}