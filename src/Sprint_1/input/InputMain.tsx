import React, {ChangeEvent, useState} from 'react';
import {ButtonUniversal} from "../buttonUniversal/ButtonUniversal";


export type InputMainType = {
    setTitle: (title: string)=> void
    title: string
}
export const InputMain = ({setTitle, title}: InputMainType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)

    }

    return (
        <div>
            <input value={title} type="text" onChange={onChangeInputHandler}/>

        </div>
    );
};
