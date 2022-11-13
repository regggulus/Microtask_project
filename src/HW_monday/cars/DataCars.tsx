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
                    <th>num</th>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                <tr>
                    <td>{oneElArrCar.number}</td>
                    <td>{oneElArrCar.manufacturer}</td>
                    <td>{oneElArrCar.model}</td>
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