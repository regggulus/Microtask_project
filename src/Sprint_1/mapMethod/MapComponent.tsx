
type MapComponentType = {
    hogwartsStudents: StudentsType[]
}
export type StudentsType = {
    id: number
    name: string
    age: number
}
export const MapComponent = ({hogwartsStudents}: MapComponentType) => {
    return (
        <ul>
            {hogwartsStudents.map( (st) => {
                return (
                    <li key={st.id}>name: {st.name} - age: {st.age}</li>
                )
            })}
        </ul>
    )
}