import React from "react";

type BodyPropsType = {
    titleBod: string
}
export const Body = (props: BodyPropsType) => {
    return (
        <div>
            {props.titleBod}
        </div>
    )
}