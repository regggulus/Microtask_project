import React, {useState} from 'react';
import './App.css';
import {Students} from "./Sprint_1/students/Students";
import {TopCars} from "./Sprint_1/topCars/TopCars";

function App() {
    return (
        <div className="App">
            <Students/>
            <TopCars/>
        </div>
    );
}

export default App;
