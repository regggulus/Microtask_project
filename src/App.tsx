import React, {useState} from 'react';
import './App.css';
import {NestedComponents} from "./Sprint_1/nestedComponents/NestedComponents";
import {DateState} from "./Sprint_1/mapMethod/DateState";
import {ButtonUsers} from "./Sprint_1/buttonUniversal/ButtonUsers";
import {Counter} from "./Sprint_1/useStateLesson/Counter";
import {Input} from "./Sprint_1/input/Input";


function App() {
    const [money, setMoney] = useState([
        {banknotes: 'Dollars -', nominal: 100 , number: '- a1234567890'},
        {banknotes: 'Dollars -', nominal: 50, number: '- z1234567890'},
        {banknotes: 'Rubles -', nominal: 100, number: '- w1234567890'},
        {banknotes: 'Dollars -', nominal: 100, number: '- e1234567890'},
        {banknotes: 'Dollars -', nominal: 50, number: '- c1234567890'},
        {banknotes: 'Rubles -', nominal: 100, number: '- r1234567890'},
        {banknotes: 'Dollars -', nominal: 50, number: '- x1234567890'},
        {banknotes: 'Rubles -', nominal: 50, number: '- v1234567890'},
        {banknotes: 'Rubles -', nominal: 5000, number: '- v1234567890'},
    ])
   const [message, setMessage] = useState([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'},
        {message: 'message 4'}
    ])

    const resultMoney =
            money.filter(filMoney => filMoney.banknotes === 'Rubles')
    return (
        <div className="App">
            {/*<NestedComponents/>*/}
            {/*<DateState/>*/}
            {/*<ButtonUsers/>*/}
            {/*<Counter/>*/}
            <Input message={message}/>
            <ul>
                {resultMoney.map((m, index) => {
                    return (
                        <li key={index}>
                            <span>{m.banknotes }</span>
                            <span>{m.nominal   }</span>
                            <span>{m.number}</span>
                        </li>

                    )
                })}
                <button onClick={() =>{}}>l</button>
            </ul>
        </div>
    );
}

export default App;
