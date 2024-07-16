import React, {useState} from 'react';
import {ButtonUsers} from "../buttonUniversal/ButtonUsers";
import {ButtonUniversal} from "../buttonUniversal/ButtonUniversal";
import {InputMain} from "./InputMain";

export const StateMessage = () => {
    const [message, setMessages] = useState([
        {messages: 'message 1'},
        {messages: 'message 2'},
        {messages: 'message 3'},
        {messages: 'message 4'}
    ])

    const addMessage = () => {
        console.log('yo')
    }

    return (
        <div>
            <InputMain callback={addMessage}/>
            <ButtonUniversal name={'+'} callback={() => {
            }}/>
            <ul>
                {message.map((m, index) => {
                    return (
                        <li key={index}>{m.messages}
                        </li>
                    )
                })}
            </ul>


        </div>
    );
};

