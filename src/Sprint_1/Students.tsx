import {useState} from "react";
import {StudentsDate} from "./StudentsDate";

export function Students() {
    const [students, setStudents] = useState([
        {
            name: "Alice Johnson",
            age: 20,
            major: "Psychology",
            email: "alice.johnson@example.com"
        },
        {
            name: "Ben Thompson",
            age: 21,
            major: "Mathematics",
            email: "ben.thompson@example.com"
        },
        {
            name: "Clara Evans",
            age: 19,
            major: "Literature",
            email: "clara.evans@example.com"
        },
        {
            name: "Daniel Wright",
            age: 22,
            major: "Engineering",
            email: "daniel.wright@example.com"
        },
        {
            name: "Emily Roberts",
            age: 20,
            major: "Biology",
            email: "emily.roberts@example.com"
        },
        {
            name: "Frank Miller",
            age: 23,
            major: "History",
            email: "frank.miller@example.com"
        },
        {
            name: "Grace Lewis",
            age: 21,
            major: "Art",
            email: "grace.lewis@example.com"
        },
        {
            name: "Harry Walker",
            age: 22,
            major: "Computer Science",
            email: "harry.walker@example.com"
        },
        {
            name: "Isla Green",
            age: 19,
            major: "Physics",
            email: "isla.green@example.com"
        },
        {
            name: "Jack Harris",
            age: 20,
            major: "Business",
            email: "jack.harris@example.com"
        }
    ])
    return (
        <div>
            <StudentsDate student={students}/>
        </div>
    )
}