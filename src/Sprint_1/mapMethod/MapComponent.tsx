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
        <>
            <table style={{width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'Arial, sans-serif',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'auto auto auto' ,
                gridGap: 'px'}}>
                {hogwartsStudents.map((st) => {
                    return (
                        <tr>
                        <tr  >
                            <th style={{padding: '10px', textAlign: 'left',
                                borderBottom: '1px solid #ddd'}}>name</th>
                            <th style={{padding: '10px',
                                textAlign: 'left',
                                borderBottom: '1px solid #ddd'}}>age</th>
                        </tr>
                            <tr >
                                <td style={{padding: '10px',
                                    textAlign: 'left',
                                    borderBottom: '1px solid #ddd'}}>{st.name}</td>
                                <td style={{padding: '10px',
                                    textAlign: 'left',
                                    borderBottom: '1px solid #ddd'}} key={st.id}>{st.age}</td>
                            </tr>
                        </tr>

                    )
                })}
            </table>
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
        </>

    )
}