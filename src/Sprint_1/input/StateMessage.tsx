import React, {useState} from 'react';
import {ButtonUsers} from "../buttonUniversal/ButtonUsers";
import {ButtonUniversal} from "../buttonUniversal/ButtonUniversal";
import {InputMain} from "./InputMain";

export const StateMessage = () => {
    const [message, setMessage] = useState([
        {messages: 'message 1'},
        {messages: 'message 2'},
        {messages: 'message 3'},
        {messages: 'message 4'}
    ])

    const AddMessage = (message: string) => {

    }

    return (
        <div>
            <InputMain callback={}/>
            <ButtonUniversal name={'+'} callback={ () => {}}/>
            <ul >
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

