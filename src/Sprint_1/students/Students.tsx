import {useState} from "react";
import {StudentsDate, StudentType} from "./StudentsDate";

// export type FilterValueType = null
export function Students() {
    let [filter, setFilter] = useState<number | null>(null)
    const [students, setStudents] = useState <Array<StudentType>>([
        {
            id: 1,
            name: "Alice Johnson",
            age: 20,
            major: "Psychology",
            email: "alice.johnson@example.com"
        },
        {
            id: 2,
            name: "Ben Thompson",
            age: 21,
            major: "Mathematics",
            email: "ben.thompson@example.com"
        },
        {
            id: 3,
            name: "Clara Evans",
            age: 19,
            major: "Literature",
            email: "clara.evans@example.com"
        },
        {
            id: 4,
            name: "Daniel Wright",
            age: 22,
            major: "Engineering",
            email: "daniel.wright@example.com"
        },
        {
            id: 5,
            name: "Emily Roberts",
            age: 20,
            major: "Biology",
            email: "emily.roberts@example.com"
        },
        {
            id: 6,
            name: "Frank Miller",
            age: 23,
            major: "History",
            email: "frank.miller@example.com"
        },
        {
            id: 7,
            name: "Grace Lewis",
            age: 21,
            major: "Art",
            email: "grace.lewis@example.com"
        },
        {
            id: 8,
            name: "Harry Walker",
            age: 22,
            major: "Computer Science",
            email: "harry.walker@example.com"
        },
        {
            id: 8,
            name: "Isla Green",
            age: 19,
            major: "Physics",
            email: "isla.green@example.com"
        },
        {
            id: 9,
            name: "Jack Harris",
            age: 20,
            major: "Business",
            email: "jack.harris@example.com"
        }
    ])
    let changeFilter = (age: null | number) => {
        setFilter(age)
    }
    let filteredStudents = students
    if (filter !== null) {
        if(filter < 20) {
            filteredStudents = students.filter(s => s.age < 20)
        }if(filter === 20) {
            filteredStudents = students.filter(s => s.age === 20)
        }if(filter > 20){
            filteredStudents = students.filter(s => s.age > 20)
        }
    }
    return (
        <div>
            <StudentsDate
                student={filteredStudents}
                changeFilter={changeFilter}
            />
        </div>
    )
}