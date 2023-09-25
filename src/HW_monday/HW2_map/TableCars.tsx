import React from "react";


type TopCarsType = {
    manufacturer: string
    model: string
}
type TableCarsType = {
    topCars: Array<TopCarsType>
}


export function TableCars(props: TableCarsType) {

    const styleTable = {'border': '1px solid black' }
    return (
        <table style={styleTable}>
            <tr>
                <th style={styleTable}>Brand</th>
                <th style={styleTable}>Model</th>
            </tr>
            {props.topCars.map((tCar, index) => {
                return (
                    <tr style={styleTable}>
                        <td style={styleTable}>{tCar.manufacturer}</td>
                        <td style={styleTable}>{tCar.model}</td>
                    </tr>
                )
            })}

        </table>
    )

}