import React from "react";
import {DataCars} from "./DataCars";


export type TopCarsType = {
    manufacturer: string
    model: string
    number: string
}

export const Cars = () => {
    const topCars = [
        {number: "1", manufacturer:'BMW', model:'m5cs'},
        {number: "2", manufacturer:'Mercedes', model:'e63s'},
        {number: "3", manufacturer:'Audi', model:'rs6'}
    ]
    return(
        <div>
            <DataCars title={topCars}/>
        </div>
    )
}