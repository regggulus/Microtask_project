import React from "react";
import {FilteredType} from "./Banknots";

type MoneyPropsType = {
    banknots: string
    value: number
    number: string
}
type NewComponentType = {
    onClickFilter: (name: FilteredType)=>void
    money: Array<MoneyPropsType>
}
export function NewComponent(props: NewComponentType) {
    const styleTable = {'border': '1px solid black'}
    return (
        <>
            <table style={styleTable}>
                <tr>
                    <th style={styleTable}>Banknots</th>
                    <th style={styleTable}>Nominal</th>
                    <th style={styleTable}>Number</th>
                </tr>
                {props.money.map((money, index) => {
                    return (
                        <tr key={index} style={styleTable}>
                            <td style={styleTable}>{money.banknots}</td>
                            <td style={styleTable}>{money.value}</td>
                            <td style={styleTable}>{money.number}</td>
                        </tr>
                    )
                })}

            </table>
            <button onClick={() => props.onClickFilter('All')}>All</button>
            <button onClick={() => props.onClickFilter('Dollar')}>Dollar</button>
            <button onClick={() => props.onClickFilter('Ruble')}>Ruble</button>
        </>
    )
}