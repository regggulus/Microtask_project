import React, {ChangeEvent, MouseEvent, useState} from 'react';
import {Input} from "./Input";
import {Button} from "./Button";


export type InputButtonType = {
    addTask: (title: string)=>void
}
export const InputButton = (props: InputButtonType) => {
    const[title, setTitle] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event. currentTarget.value)
    }
    const onClickButtonHandler = ( ) => {
        props.addTask(title)
        setTitle('')
    }

    return (
        <div>
            <div>

                <input value={title} onChange={onChangeHandler} type="text"/>
                <button onClick={onClickButtonHandler}>+</button>
            </div>
        </div>
    );
};

