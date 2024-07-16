import React, {useState} from 'react';
import {ButtonUsers} from "../buttonUniversal/ButtonUsers";
import {ButtonUniversal} from "../buttonUniversal/ButtonUniversal";

export const StateMessage = () => {
    const [message, setMessage] = useState([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'},
        {message: 'message 4'}
    ])
    return (
        <div>
            <input/>
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

