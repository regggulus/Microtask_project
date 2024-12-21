import {useState} from "react";
import {BanknotesDate} from "./BanknotesDate";

export function Banknotes() {
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
    return (
        <div>
            <BanknotesDate money={money}/>
        </div>
    )
}