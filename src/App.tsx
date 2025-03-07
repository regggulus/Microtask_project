import React, {useState} from 'react';
import './App.css';
import {Students} from "./Sprint_1/students/Students";
import {TopCars} from "./Sprint_1/topCars/TopCars";
import {Banknotes} from "./Sprint_1/banknots/Banknotes";
import {AddMessage} from "./Sprint_1/AddMessage/AddMessage";

function App() {
    return (
        <div className="App">
            <AddMessage/>
            <Banknotes/>
            <Students/>
            <TopCars/>
        </div>
    );
}

export default App;
