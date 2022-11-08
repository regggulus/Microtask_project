import React from "react";

export type StudentsPropsType = {
    title: Array<StudentObjectType>
}

export type StudentObjectType = {
    id: number
    name: string
    age: number
}
export const Student = (props: StudentsPropsType) => {
    const arrStud = props.title.map((el) => {
        return (
            <div>
                <ul>
                    <li key={el.id}>{el.name}{el.age}</li>
                </ul>
            </div>
        )
    })
    return (
        <div>
            {arrStud}
        </div>
    )
}