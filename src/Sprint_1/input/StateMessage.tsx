import React, {useState} from 'react';
import {ButtonUsers} from "../buttonUniversal/ButtonUsers";
import {ButtonUniversal} from "../buttonUniversal/ButtonUniversal";
import {InputMain} from "./InputMain";

export const StateMessage = () => {
    const [message, setMessage] = useState([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'},
        {message: 'message 4'}
    ])
    return (
        <div>
            <InputMain/>
            <ButtonUniversal name={'+'} callback={ () => {}}/>
            <ul >
                {message.map((m, index) => {
                    return (
                        <li key={index}>{m.message}
                        </li>
                    )
                })}
            </ul>


        </div>
    );
};

