import React, {ChangeEvent, useState} from 'react';


export type InputMainType = {
    callback: ()=> void
}
export const InputMain = ({callback}: InputMainType) => {
    const [title, setTitle] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <div>
            <input type="text" onChange={onChangeInputHandler}/>
        </div>
    );
};
