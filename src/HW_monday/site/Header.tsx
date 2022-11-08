import React from "react";

type HeaderPropsType = {
    titleHead: string
}
export const Header = (props: HeaderPropsType) => {
    return (
        <div>
            {props.titleHead}
        </div>
    )
}