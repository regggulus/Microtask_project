import React, {ChangeEvent} from 'react'

export type UniInputType = {
    title: string
    setTitle:(title: string)=>void
}
export const UniversalInput :React.FC<UniInputType> = ({title, setTitle}) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <input value={title} onChange={onChangeInputHandler}/>
    )
}