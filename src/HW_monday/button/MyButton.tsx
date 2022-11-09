import React, {MouseEvent} from "react";
import {ChanelButton} from "./ChanelButton";


export function MyButton() {
const Buttfoo1 = (subscriber: string) => {
    console.log(subscriber)
}
const Buttfoo2 = (subscriber: string) => {
    console.log(subscriber)
}

    return (
        <div>
         <ChanelButton name={"chanel1"} callBack={()=> Buttfoo1("Vasya")}/>
         <ChanelButton name={"chanel2"}
         callBack={ () => Buttfoo2("Ivan")}/>
        </div>
    )
}