import React, {useState} from 'react'
import {UniversalButton} from "../button/UniversalButton";

export function InputMessage() {
    const [title, setTitle]=useState('')
    return (
        <div>
            <input type="text"/>
            <UniversalButton name={'add'} callback={()=>{}}/>
        </div>
    )
}