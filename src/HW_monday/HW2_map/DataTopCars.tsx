import React, {useState} from "react";
import {TableCars} from "./TableCars";


export function DataTopCars () {
let [topCars, setTopCars] = useState([
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
])

    return (
        <TableCars topCars={topCars}/>
    )
}