import React, {MouseEvent} from "react";
import {SuperButton} from "./SuperButton";


export function Buttons() {
const Button1 = () => {
    console.log('Hello, Vasya!')
}
const DeleteButton = () => {
    console.log()
}
    return (
        <>
            <SuperButton name={'button1'} callback={Button1}/>
            <SuperButton name={'button2'} callback={DeleteButton}/>
        </>
    )
}