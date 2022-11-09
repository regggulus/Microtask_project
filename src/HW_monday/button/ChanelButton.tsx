import React from "react";

type ChanelButtonPropsType = {
    chanelButt: string
}

export function ChanelButton(props: ChanelButtonPropsType) {

    return (
        <div>
            <button>{props.chanelButt}</button>
        </div>
    )
}