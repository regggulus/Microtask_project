import React, {useState} from 'react';
import {ButtonUsers} from "../buttonUniversal/ButtonUsers";
import {ButtonUniversal} from "../buttonUniversal/ButtonUniversal";
import {InputMain} from "./InputMain";

export const StateMessage = () => {

    const [messages, setMessages] = useState([
        {message: 'messages 1'},
        {message: 'messages 2'},
        {message: 'messages 3'},
        {message: 'messages 4'}
    ])
    const [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        const newMessage = {message: title}
       setMessages([newMessage, ...messages])
    }
    const onClickButtonHandler = () => {
       addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <div>
                <InputMain setTitle={setTitle} title={title}/>
                <ButtonUniversal name={'+'} callback={onClickButtonHandler}/>
            </div>

            <ul>
                {messages.map((m, index) => {
                    return (
                        <li key={index}>{m.message}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

