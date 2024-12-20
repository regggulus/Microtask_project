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
    filterUnder: ()=>void
    filterOver: ()=>void
    filterExactly: ()=>void
}
export function StudentsDate(props: StudentsDateType) {
    const onClickUnderHandler = () => {
        props.filterUnder()
    }
    const onClickOverHandler = () => {
        props.filterOver()
    }
    const onClickExactlyHandler = () => {
        props.filterExactly()
    }
    return (
        <div>
                    <h1>Students</h1>
                    <table style={{ width: '50%', borderCollapse: 'collapse' }}>
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
            <Button callback={()=>onClickUnderHandler()} name={'under 20'}/>
            <Button callback={()=>onClickOverHandler()} name={'over 20'}/>
            <Button callback={()=>onClickExactlyHandler()} name={'exactly 20'}/>
        </div>
    )
}