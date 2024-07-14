import React from "react";
import {ButtonUsers} from "../buttonUniversal/ButtonUsers";

export type MessageType = {
    message: string
}
type InputType = {
    message: Array<MessageType>
}
export const Input = ({message}: MessageType) => {
    return (
        <div>
            <input type="text"/>
            <ButtonUsers/>

        </div>
    )
}