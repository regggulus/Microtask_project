
export type StudentType = {
    id: number
    isDone: boolean
    name: string
    age: number
    major: string
    email: string
}
export type StudentsDateType = {
    student: Array<StudentType>
}
export function StudentsDate(props: StudentsDateType) {
    return (
        <div>
            {props.student.map(s => <ul >
                <li key={s.id} ><input type="checkbox" checked={s.isDone} /><b>Name: </b> {s.name } <b>Age: </b>{s.age } <b>Major: </b>{s.major } <b>Email: </b>{s.email }</li>
            </ul>)}
        </div>
    )
}