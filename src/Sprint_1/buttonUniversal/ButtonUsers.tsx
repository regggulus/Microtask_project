import React from 'react'
import {ButtonUniversal} from "./ButtonUniversal";


export const ButtonUsers = () => {
    const onClickOneHandler = (say: string) => {
       alert(say)}
    const onClickTwoHandler = (say: string) => {
       alert(say)}
    return (
        <div>
            <ButtonUniversal name= {'Subscriber'} callback= {()=> {onClickOneHandler('Hi')}}/>
            <ButtonUniversal name= {'like'} callback={()=> {onClickTwoHandler('Yo')}}/>
        </div>
    )
}