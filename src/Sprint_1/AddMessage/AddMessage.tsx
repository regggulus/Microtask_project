import React, {useState} from 'react'
import {UniversalInput} from "../universalComponents/UniversalInput";
import {UniversalButton} from "../universalComponents/UniversalButton";


export const AddMessage: React.FC = () => {
    const [message, setMessage] = useState([
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'Like'},
        {id: 4, message: 'stupid component'},
    ])
    const [title, setTitle] = useState('')
    const addNewMessage = (title: string) => {
        let newMessage = {id: 6, message: title}
        setMessage([newMessage, ...message])
    }
    const onClickAddMessageHandler = () => {
        addNewMessage(title)
        setTitle('')
    }


    return (
        <div>
            <UniversalInput setTitle={setTitle} title={title}/>
            <UniversalButton name={'add'} callback={onClickAddMessageHandler}/>
            {message.map(m => {
                return (
                    <li key={m.id}>{m.message}</li>
                )
            })}
        </div>
    )
}