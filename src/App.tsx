import React, {useState} from 'react';
import './App.css';
import {Students} from "./Sprint_1/Students";
import {TopCars} from "./Sprint_1/TopCars";

function App() {
    /* const [money, setMoney] = useState([
         {banknotes: 'Dollars -', nominal: 100 , number: '- a1234567890'},
         {banknotes: 'Dollars -', nominal: 50, number: '- z1234567890'},
         {banknotes: 'Rubles -', nominal: 100, number: '- w1234567890'},
         {banknotes: 'Dollars -', nominal: 100, number: '- e1234567890'},
         {banknotes: 'Dollars -', nominal: 50, number: '- c1234567890'},
         {banknotes: 'Rubles -', nominal: 100, number: '- r1234567890'},
         {banknotes: 'Dollars -', nominal: 50, number: '- x1234567890'},
         {banknotes: 'Rubles -', nominal: 50, number: '- v1234567890'},
         {banknotes: 'Rubles -', nominal: 5000, number: '- v1234567890'},
     ])*/

    return (
        <div className="App">
            <Students/>
            <TopCars/>
        </div>
    );
}

export default App;
