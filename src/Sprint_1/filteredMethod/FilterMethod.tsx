import {useState} from "react";

type FilterMethodType = {
    banknotes: string
    value: number
    number: number
}
export const FilterMethod = () => {
    const [money, setMoney] = useState([
        {banknotes: 'Dollars -', value: 100 , number: ' a1234567890'},
        {banknotes: 'Dollars -', value: 50, number: ' z1234567890'},
        {banknotes: 'rubles -', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars -', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars -', value: 50, number: ' c1234567890'},
        {banknotes: 'rubles -', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars -', value: 50, number: ' x1234567890'},
        {banknotes: 'rubles -', value: 50, number: ' v1234567890'},
    ])

    return (
        <ul>
            {money.map((m, index) => {
                return (
                   <li key={index}>
                       <span>{m.banknotes }</span>
                       <span>{m.value   }</span>
                       <span>{m.number}</span>
                   </li>

                )
            })}
        </ul>
    )
}