import React from 'react';
import './App.css';
import { Body } from './site/Body';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";

function App() {
  return (
    <div className="App">
      <Header titleHead={"New Head"}/>
      <Body titleBod={"New Body"}/>
      <Footer titleFoot={"New Footer"}/>

    </div>
  );
}

export default App;
