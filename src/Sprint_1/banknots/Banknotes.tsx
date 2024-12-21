import {useState} from "react";
import {BanknotesDate, MoneyType} from "./BanknotesDate";


export type FilterValueType = 'All Money' | 'Dollars' | 'Rubles'
export function Banknotes() {
    const [filterMoney, setFilterMoney] = useState<FilterValueType>('All Money')
    const [money, setMoney] = useState([
        {banknotes: 'Dollars', nominal: 100, serialNumber: 'a1234567890'},
        {banknotes: 'Dollars', nominal: 50, serialNumber: 'z1234567890'},
        {banknotes: 'Rubles', nominal: 100, serialNumber: 'w1234567890'},
        {banknotes: 'Dollars', nominal: 100, serialNumber: 'e1234567890'},
        {banknotes: 'Dollars', nominal: 50, serialNumber: 'c1234567890'},
        {banknotes: 'Rubles', nominal: 100, serialNumber: 'r1234567890'},
        {banknotes: 'Dollars', nominal: 50, serialNumber: 'x1234567890'},
        {banknotes: 'Rubles', nominal: 50, serialNumber: 'v1234567890'},
        {banknotes: 'Rubles', nominal: 5000, serialNumber: 'v1234567890'},
    ])
    const changeFilter = (filterMoney: FilterValueType) => {
        setFilterMoney(filterMoney)
    }
    let filterHandler: Array<MoneyType> = money
        if(filterMoney === 'Dollars') {
            filterHandler = money.filter(m => m.banknotes === 'Dollars')
        }
        if(filterMoney === 'Rubles') {
            filterHandler = money.filter(m => m.banknotes === 'Rubles')
        }
    return (
        <div>
            <BanknotesDate
                money={filterHandler}
                changeFilter={changeFilter}
            />
        </div>
    )
}