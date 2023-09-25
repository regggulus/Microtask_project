import React from "react";

export type SuperButtonType = {
    name: string
    callback:()=>void
}
export function SuperButton(props: SuperButtonType) {

    const onClickHandler = () => {
       props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}