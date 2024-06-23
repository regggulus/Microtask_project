import React from 'react';
import './App.css';
import {NestedComponents} from "./Sprint_1/nestedComponents/NestedComponents";
import {DateState} from "./Sprint_1/mapMethod/DateState";
import {ButtonUniversal} from "./Sprint_1/buttonUniversal/ButtonUniversal";


function App() {
    return (
        <div className="App">
            <NestedComponents/>
            <DateState/>
            <ButtonUniversal/>
        </div>
    );
}

export default App;
