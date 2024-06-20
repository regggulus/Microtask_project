import React from 'react';
import './App.css';
import {Header} from "./Sprint_1/nestedComponents/Header";
import {Navbar} from "./Sprint_1/nestedComponents/Navbar";
import {Footer} from "./Sprint_1/nestedComponents/Footer";


function App() {
    return (
        <div className="App">
            <Header title={'Site title'}/>
            <Navbar value={4}/>
            <Footer collapsed={false} title={'Menu'}/>
        </div>
    );
}

export default App;
