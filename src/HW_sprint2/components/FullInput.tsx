import React, {ChangeEvent, useState} from 'react'

export type FullInputType = {
    addMessage: (title: string)=>void
}
export  function FullInput(props: FullInputType) {
    let [title, setTitle] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addMessage(title)
    }
return (
    <div>
        <input type="text" onChange={onChangeHandler}/>
        <button onClick={onClickHandler}>+</button>
    </div>
)
}