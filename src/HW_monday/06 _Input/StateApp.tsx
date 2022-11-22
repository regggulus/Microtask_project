import React, {useState} from 'react';
import {InputButton} from "./InputButton";
import {Input} from "./Input";
import {Button} from "./Button";

export function StateApp() {
    let [message, setMessage] = useState( [
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    let [title, setTitle]=useState('')
    const addTask = (title: string) => {
        let newTask = {message: title}
        setMessage([newTask, ...message])

    }

    return (
        <div>
            {/*<InputButton addTask={addTask}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name={"+"} callBack={ ()=>{}}/>

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
