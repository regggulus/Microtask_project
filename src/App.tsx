import React from 'react';
import './App.css';
import {Site} from "./HW_monday/site/SIte";
import {StudentsArr} from "./HW_monday/students/StudentsArr";
import {Cars} from "./HW_monday/cars/Cars";
import {MyButton} from "./HW_monday/button/MyButton";
import {Button} from "./HW_monday/useState/Button";
import {MethodFilter} from "./HW_monday/filter/methodFilter";
import {StateApp} from "./HW_monday/06 _Input/StateApp";

function App() {
  return (
    <div className="App">
    {/*<Site/>*/}
    {/*  <StudentsArr/>*/}
    {/*    <Cars/>*/}
    {/*  <MyButton/>*/}
    {/*  <Button/>*/}
    {/*    <MethodFilter/>*/}
      <StateApp/>
    </div>
  );
}

export default App;
