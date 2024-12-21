import React from "react";

export type TopCars = {
    manufacturer: string,
    model: string
}
type TopCarsDateType = {
    cars: Array<TopCars>
}
export function TopCarsDate(props: TopCarsDateType) {
    return (
        <div>
            <h1>Топ Автомобили</h1>
            <table style={{ width: '50%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Производитель</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Модель</th>
                </tr>
                </thead>
                <tbody>
                {props.cars.map((car, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{car.manufacturer}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{car.model}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}