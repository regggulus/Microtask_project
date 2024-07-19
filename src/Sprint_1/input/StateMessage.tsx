import React, {useState} from 'react';
import {ButtonUsers} from "../buttonUniversal/ButtonUsers";
import {ButtonUniversal} from "../buttonUniversal/ButtonUniversal";
import {InputMain} from "./InputMain";

/*export type MessageType = {
    message: string
}
export type StateMessageType = {
    message: Array<MessageType>
}*/
export const StateMessage = () => {
    const [messages, setMessages] = useState([
        {message: 'messages 1'},
        {message: 'messages 2'},
        {message: 'messages 3'},
        {message: 'messages 4'}
    ])

    const addMessage = (title: string) => {
        const newMessage = {message: title}
       setMessages([newMessage, ...messages])
    }
    const onClickButtonHandler = () => {
        callback(title)
        setTitle('')
    }

    return (
        <div>
            <InputMain callback={addMessage}/>
            <ButtonUniversal name={'+'} callback={onClickButtonHandler}/>
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

