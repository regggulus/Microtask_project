import React from "react";
import {DataCars} from "./DataCars";


export type TopCarsType = {
    manufacturer: string
    model: string
}

export const Cars = () => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return(
        <div>
            <DataCars title={topCars}/>
        </div>
    )
}