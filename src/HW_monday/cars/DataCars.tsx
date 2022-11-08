import React from "react";
import {TopCarsType} from "./Cars";

export type DataCarsPropsType = {
    title: Array<TopCarsType>
}

export function DataCars(props: DataCarsPropsType) {
    return (
        <div>
            <table>
                <tr>
                    <th>{props.title[0].manufacturer}</th>
                    <th>{props.title[0].model}</th>
                </tr>
                <tr>
                    <td>{props.title[1].manufacturer}</td>
                    <td>{props.title[1].model}</td>
                </tr>
                <tr>
                    <td>{props.title[2].manufacturer}</td>
                    <td>{props.title[2].model}</td>
                </tr>
            </table>
        </div>
    )
}