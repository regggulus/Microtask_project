import React, {MouseEvent} from "react";
import {ChanelButton} from "./ChanelButton";


export function MyButton() {
    const Buttfoo1 = (subscriber: string, age: number) => {
        console.log(subscriber)
    }
    const Buttfoo2 = (subscriber: string, from: string) => {
        console.log(subscriber)
    }
    const Buttfoo3 = (subscriber: string) => {
        console.log(subscriber)
    }

    return (
        <div>
            <ChanelButton
                name={"chanel1"}
                callBack={() => Buttfoo1("Vasya", 21)}/>
            <ChanelButton
                name={"chanel2"}
                callBack={() => Buttfoo2("Ivan", "Minsk")}/>
            <ChanelButton
                name={"chanel2"}
                callBack={() => Buttfoo3("Im button")}/>
        </div>
    )
}