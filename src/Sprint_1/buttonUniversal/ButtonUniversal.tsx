import React, {MouseEvent} from 'react'


export const ButtonUniversal = () => {
    const onClickOneHandler = (say: string) => {
       alert(say)}
    const onClickTwoHandler = () => {alert('Hello World!')}
    return (
        <div>
            <button onClick={ () => {onClickOneHandler('Hello samurai')}}>one</button>
            <button onClick={onClickTwoHandler} type="submit">two</button>
        </div>
    )
}