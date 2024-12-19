import {useState} from "react";
import {StudentsDate} from "./StudentsDate";

export function Students() {
    const [students, setStudents] = useState([
        {
            id: 1,
            isDone: true,
            name: "Alice Johnson",
            age: 20,
            major: "Psychology",
            email: "alice.johnson@example.com"
        },
        {
            id: 2,
            isDone: true,
            name: "Ben Thompson",
            age: 21,
            major: "Mathematics",
            email: "ben.thompson@example.com"
        },
        {
            id: 3,
            isDone: true,
            name: "Clara Evans",
            age: 19,
            major: "Literature",
            email: "clara.evans@example.com"
        },
        {
            id: 4,
            isDone: true,
            name: "Daniel Wright",
            age: 22,
            major: "Engineering",
            email: "daniel.wright@example.com"
        },
        {
            id: 5,
            isDone: true,
            name: "Emily Roberts",
            age: 20,
            major: "Biology",
            email: "emily.roberts@example.com"
        },
        {
            id: 6,
            isDone: true,
            name: "Frank Miller",
            age: 23,
            major: "History",
            // email: "frank.miller@example.com"
        },
        {
            id: 7,
            isDone: true,
            name: "Grace Lewis",
            age: 21,
            major: "Art",
            email: "grace.lewis@example.com"
        },
        {
            id: 8,
            isDone: true,
            name: "Harry Walker",
            age: 22,
            major: "Computer Science",
            // email: "harry.walker@example.com"
        },
        {
            id: 8,
            isDone: true,
            name: "Isla Green",
            age: 19,
            major: "Physics",
            email: "isla.green@example.com"
        },
        {
            id: 9,
            isDone: true,
            name: "Jack Harris",
            age: 20,
            major: "Business",
            // email: "jack.harris@example.com"
        }
    ])
    return (
        <div>
            <StudentsDate student={students}/>
        </div>
    )
}