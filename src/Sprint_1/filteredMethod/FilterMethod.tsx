import {useState} from "react";
import {ButtonUniversal} from "../buttonUniversal/ButtonUniversal";

type FilterMethodType = {
    banknotes: string
    value: number
    number: number
}
export const FilterMethod = () => {
    const [money, setMoney] = useState([
        {banknotes: 'Dollars -', nominal: 100 , number: ' a1234567890'},
        {banknotes: 'Dollars -', nominal: 50, number: ' z1234567890'},
        {banknotes: 'Rubles -', nominal: 100, number: ' w1234567890'},
        {banknotes: 'Dollars -', nominal: 100, number: ' e1234567890'},
        {banknotes: 'Dollars -', nominal: 50, number: ' c1234567890'},
        {banknotes: 'Rubles -', nominal: 100, number: ' r1234567890'},
        {banknotes: 'Dollars -', nominal: 50, number: ' x1234567890'},
        {banknotes: 'Rubles -', nominal: 50, number: ' v1234567890'},
    ])
    const currentMoney = money.filter(filterM => filterM.banknotes === 'Dollars')

    return (
        <ul>
            {currentMoney.map((m, index) => {
                return (
                   <li key={index}>
                       <span>{m.banknotes }</span>
                       <span>{m.nominal   }</span>
                       <span>{m.number}</span>
                   </li>

                )
            })}
            <div>
                <ButtonUniversal name={'All'} callback={()=>{
                    console.log('all')}}/>
                <ButtonUniversal name={'Dollars'} callback={()=>{}}/>
                <ButtonUniversal name={'Rubles'} callback={()=>{}}/>
            </div>
        </ul>
    )
}