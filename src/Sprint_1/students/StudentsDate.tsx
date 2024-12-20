import {Button} from "../button/Button";

export type StudentType = {
    id: number
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
                    <h1>Students</h1>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Major</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.student.map((s )=> (
                            <tr key={s.id}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{s.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{s.age}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{s.major}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{s.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            <Button name={'under 20'}/>
            <Button name={'over 20'}/>
            <Button name={'exactly 20'}/>
        </div>
    )
}