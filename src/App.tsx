import React from 'react';
import './App.css';
import {NestedComponents} from "./Sprint_1/nestedComponents/NestedComponents";
import {DateState} from "./Sprint_1/mapMethod/DateState";
import {ButtonUsers} from "./Sprint_1/buttonUniversal/ButtonUsers";
import {Counter} from "./Sprint_1/useStateLesson/Counter";


function App() {
    return (
        <div className="App">
            <NestedComponents/>
            <DateState/>
            <ButtonUsers/>
            <Counter/>
        </div>
    );
}

export default App;
