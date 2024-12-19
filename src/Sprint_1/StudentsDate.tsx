
type StydentType = {
    name: string
    age: number
    major: string
    email: string
}
type StudentsDateType = {
    student: Array<StydentType>
}
export function StudentsDate(props: StudentsDateType) {
    return (
        <div>
            {props.student.map(s => <ul>
                <li><b>Name: </b> {s.name } <b>Age: </b>{s.age } <b>Major: </b>{s.major } <b>Email: </b>{s.email }</li>
            </ul>)}
        </div>
    )
}