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
    )
}