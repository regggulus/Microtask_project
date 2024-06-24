import React from 'react'

export type ButtonUniversalType = {
    name: string
    callback: ()=> void
}
export const ButtonUniversal = ({name, callback}: ButtonUniversalType) => {
    const onClickHandler = () => {
        callback()
    }
    return (

        <button onClick={onClickHandler}>{name}</button>
    )
}