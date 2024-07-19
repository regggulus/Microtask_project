import React, {ChangeEvent, useState} from 'react';
import {ButtonUniversal} from "../buttonUniversal/ButtonUniversal";


export type InputMainType = {
    callback: (title: string)=> void
}
export const InputMain = ({callback}: InputMainType) => {
    const [title, setTitle] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)

    }
    /*const onClickButtonHandler = () => {
        callback(title)
        setTitle('')
    }*/
    /*const onKeyPressClick = () => {
        if(title === 'Enter') {
            callback(title)
            setTitle('')
        }
    }*/

    return (
        <div>
            <input value={title} type="text" onChange={onChangeInputHandler}/>

        </div>
    );
};
