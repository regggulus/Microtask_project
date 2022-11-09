import React, {MouseEvent} from "react";


export function MyButton() {
    /*const buttonClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hi")
    }*/
    const onClickHandler = (name: string) => {
        console.log(name)
    }
    const foo1 = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hi, foo1!!!")
    }
    const foo2 = (age: number) => {
        console.log(age)
    }
    return (
        <div>
            <button onClick={(event) => onClickHandler("Bob")}>Click Me</button>
            <button onClick={(event) => onClickHandler("Sam")}>Click Me</button>
            <button onClick={foo1}>1</button>
            <button onClick={ (event) => {foo2(100200)}}>2</button>
        </div>
    )
}