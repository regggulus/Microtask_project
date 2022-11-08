import React from "react";
import {TopCarsType} from "./Cars";

export type DataCarsPropsType = {
    title: Array<TopCarsType>
}

export function DataCars(props: DataCarsPropsType) {

    const car = props.title.map( (oneElArrCar) => {
        return (
            <table>
                <tr>
                    <th>{oneElArrCar.manufacturer}</th>
                    <th>{oneElArrCar.model}</th>
                </tr>
            </table>
        )
    })
    return (
        <div>
            {car}
        </div>
    )
}