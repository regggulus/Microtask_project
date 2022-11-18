import React, {useState} from "react";
import {NewComponets} from "./NewComponets";

export type MethodFilterType = {
    banknots: string
    value: number
    number: string
}
export type FilterMoneyType = 'All' | 'RUBLS' | 'Dollars'
export function MethodFilter() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'}
    ])
    const [filterMoney, setFilterMoney] = useState<FilterMoneyType>('All')

    let filMon = money
    if(filterMoney === 'RUBLS') {
        filMon = money.filter( (filterObj) => filterObj.banknots === 'RUBLS')
    } if (filterMoney === 'Dollars') {
        filMon = money.filter( (filterObj) => filterObj.banknots === 'Dollars')
    }

    const onClickHandler = (nameButt: FilterMoneyType) => {
        setFilterMoney(nameButt)
    }
    return (
        <div>
            <NewComponets filMon={filMon} onClickHandler={onClickHandler} />
        </div>


    )
}