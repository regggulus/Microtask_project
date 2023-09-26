import React, {useState} from "react";
import {SuperButton} from "../HW3_button/SuperButton";
import {NewComponent} from "./NewComponent";

export type FilteredType = 'All' | 'Dollar' | 'Ruble'

export function Banknots() {
    const [money, setMoney] = useState([
        {banknots: 'Dollar', value: 100, number: ' a1234567890'},
        {banknots: 'Dollar', value: 50, number: ' z1234567890'},
        {banknots: 'Ruble', value: 100, number: ' w1234567890'},
        {banknots: 'Dollar', value: 100, number: ' e1234567890'},
        {banknots: 'Dollar', value: 50, number: ' c1234567890'},
        {banknots: 'Ruble', value: 100, number: ' r1234567890'},
        {banknots: 'Dollar', value: 50, number: ' x1234567890'},
        {banknots: 'Ruble', value: 50, number: ' v1234567890'},
    ])
    // const styleTable = {'border': '1px solid black'}
    const [filter, setFilter] = useState<FilteredType>('All')
    let currentMoney = money
    if (filter === 'Dollar') {
        currentMoney = money.filter(
            filterMoney =>
                filterMoney.banknots !== 'Ruble')
    }
    if (filter === 'Ruble') {
        currentMoney = money.filter(
            filterMoney =>
                filterMoney.banknots !== 'Dollar')
    }
    let onClickFilterHandler = (name: FilteredType) => {
        setFilter(name)
    }

    return (
        <NewComponent
            money={currentMoney}
            onClickFilter={onClickFilterHandler}
        />
        // <>
        //     <table style={styleTable}>
        //         <tr>
        //             <th style={styleTable}>Banknots</th>
        //             <th style={styleTable}>Nominal</th>
        //             <th style={styleTable}>Number</th>
        //         </tr>
        //         {currentMoney.map((money, index) => {
        //             return (
        //                 <tr key={index} style={styleTable}>
        //                     <td style={styleTable}>{money.banknots}</td>
        //                     <td style={styleTable}>{money.value}</td>
        //                     <td style={styleTable}>{money.number}</td>
        //                 </tr>
        //             )
        //         })}
        //
        //     </table>
        //     <button onClick={() => onClickFilterHandler('All')}>All</button>
        //     <button onClick={() => onClickFilterHandler('Dollar')}>Dollar</button>
        //     <button onClick={() => onClickFilterHandler('Ruble')}>Ruble</button>
        // </>
    )
}