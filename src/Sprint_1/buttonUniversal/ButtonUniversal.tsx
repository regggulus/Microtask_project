import React from 'react'

export type ButtonUniversalType = {
    name: string
    callback: ()=> void
}
export const ButtonUniversal = ({name, callback}: ButtonUniversalType) => {
    const onClickHandler = () => {
        callback()
    }
    const onKeyPressHandler = () => {

    }
    return (

        <button onKeyPress={onKeyPressHandler} onClick={onClickHandler}>{name}</button>
    )
}