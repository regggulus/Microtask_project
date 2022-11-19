import React, {useState} from 'react';
import {InputButton} from "./InputButton";

export function StateApp() {
    let [message, setMessage] = useState( [
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    return (
        <div>
            <InputButton/>

            {message.map( (m, index) => {
                return (
                    <ul>
                        <li key={index}>{m.message}</li>
                    </ul>
                )
            })}
        </div>
    );
};
