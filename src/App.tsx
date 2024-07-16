import React, {useState} from 'react';
import './App.css';
import {NestedComponents} from "./Sprint_1/nestedComponents/NestedComponents";
import {DateState} from "./Sprint_1/mapMethod/DateState";
import {ButtonUsers} from "./Sprint_1/buttonUniversal/ButtonUsers";
import {Counter} from "./Sprint_1/useStateLesson/Counter";
import {StateMessage} from "./Sprint_1/input/StateMessage";


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


    const resultMoney =
            money.filter(filMoney => filMoney.banknotes === 'Rubles')
    return (
        <div className="App">
            {/*<NestedComponents/>*/}
            {/*<DateState/>*/}
            {/*<ButtonUsers/>*/}
            {/*<Counter/>*/}
            <StateMessage/>
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
