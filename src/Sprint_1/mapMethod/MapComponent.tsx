type MapComponentType = {
    hogwartsStudents: StudentsType[]
    topCars: Array<TopCarsType>
}
export type StudentsType = {
    id: number
    name: string
    age: number
}
export type TopCarsType = {
    manufacturer: string
    model: string
}

export const MapComponent = ({hogwartsStudents, topCars}: MapComponentType) => {
    return (
        <div>
            <ul>
                {hogwartsStudents.map((st) => {
                    return (
                        <li key={st.id}>name: {st.name} - age: {st.age}</li>
                    )
                })}
            </ul>
            <table style={{border: '1px solid black'}}>
                {topCars.map((car, index) => {
                    return (
                        <tr style={{border: '1px solid black'}}>
                            <tr>
                                <th style={{border: '1px solid black'}}>manufacturer</th>
                                <th style={{border: '1px solid black'}}>model</th>
                            </tr>
                            <tr style={{textAlign: 'center'}}>
                                <td style={{border: '1px solid black'}}>{car.manufacturer}</td>
                                <td style={{border: '1px solid black'}}>{car.model}</td>
                            </tr>
                        </tr>

                    )
                })}
            </table>
        </div>

    )
}