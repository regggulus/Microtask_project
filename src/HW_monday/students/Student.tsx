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
    const arrstud = props.title.map( (el) => {
        return (
            <ul >
                <li key={el.id}>{el.name}{el.age}</li>
            </ul>
        )
    })

    return (
        <div>
            {arrstud}
        </div>
    )
}