import React, {MouseEvent} from "react";

type ChanelButtonPropsType = {
    name: string
    callBack: () => void
}

export function ChanelButton(props: ChanelButtonPropsType) {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}