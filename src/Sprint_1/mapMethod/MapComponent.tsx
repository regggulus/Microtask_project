
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
        <div>

        </div>
    )
}