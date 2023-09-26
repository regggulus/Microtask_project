import React from 'react';
import './App.css';
import {DataTopCars} from "./HW_monday/HW2_map/DataTopCars";
import {Buttons} from "./HW_monday/HW3_button/Buttons";
import {Banknots} from "./HW_monday/HW3_filter/Banknots";

function App() {
    return (
        <div className="App">
            <DataTopCars/>
            <br/>
            <Buttons/>
            <br/>
            <br/>
            <Banknots/>
        </div>
    );
}

export default App;
