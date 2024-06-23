import React from 'react'
import {ButtonUniversal} from "./ButtonUniversal";


export const ButtonUsers = () => {
    const onClickOneHandler = (say: string) => {
       alert(say)}
    const onClickTwoHandler = () => {alert('Hello World!')}
    return (
        <div>
            <ButtonUniversal/>
            <button onClick={ () => {onClickOneHandler('Hello samurai')}}>subscriber</button>
            <button onClick={onClickTwoHandler}>like</button>
        </div>
    )
}