import React from 'react';
import './App.css';
import {DataTopCars} from "./HW_monday/HW2_map/DataTopCars";
import {Buttons} from "./HW_monday/HW3_button/Buttons";
import {Banknots} from "./HW_monday/HW3_filter/Banknots";
import {FullInput} from "./HW_sprint2/components/FullInput";

export type AppPropsType = {
    addMessage: (title: string)=>void
}
function App() {
    return (
        <div className="App">
            <div>
                <h2>Sprint 1</h2>
                <DataTopCars/>
                <br/>
                <Buttons/>
                <br/>
                <br/>
                <Banknots/>
            </div>
            <div>
                <h2>Sprint 2</h2>
                <FullInput addMessage={}/>
            </div>

        </div>
    );
}

export default App;
