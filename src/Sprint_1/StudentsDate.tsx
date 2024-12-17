
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
            {props.student.map(s => <div>
                <li>{s.name }-{s.age }-{s.major }-{s.email }</li>
            </div>)}
        </div>
    )
}