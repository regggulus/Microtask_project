import React from "react";
import {ButtonUsers} from "../buttonUniversal/ButtonUsers";

export type MessageType = {
    message: object
}
type InputType = {
    message: Array<MessageType>
}
export const Input = ({message}: MessageType) => {
    return (
        <div>
            <input type="text"/>
            {message.map()}
            <ButtonUsers/>

        </div>
    )
}