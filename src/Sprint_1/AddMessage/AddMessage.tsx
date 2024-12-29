import React, {ChangeEvent, useState} from 'react'
import {UniversalButton} from "../universalComponents/UniversalButton";

export function AddMessage() {
    const [title, setTitle]=useState('')
    const [message, setMessage]=useState([
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Like'},
        {id: 4, message: 'stupid component'},
    ])
    const onClickAddHandler = () => {
      const newMessage = {id: 6, message: 'newMes'}
        setMessage([newMessage, ...message])
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <div>
            <input type="text" value={title} onChange={onChangeInputHandler}/>
            <UniversalButton name={'add'} callback={onClickAddHandler}/>
            {message.map(m => {
                return (
                    <li key={m.id}>{m.message}</li>
                )
            })}
        </div>
    )
}