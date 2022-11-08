import React from "react";

type FooterPropsType = {
    titleFoot: string
}
export const Footer = (props: FooterPropsType) => {
    return (
        <div>
            {props.titleFoot}
        </div>
    )
}