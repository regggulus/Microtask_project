import {MapComponent} from "./MapComponent";


export const StudentsDate = () => {

    const hogwartsStudents = [
        {id: 1, name: "Harry Potter", age: 17},
        {id: 2, name: "Ron Weasley", age: 17},
        {id: 3, name: "Hermione Granger", age: 17},
        {id: 4, name: "Draco Malfoy", age: 17},
        {id: 5, name: "Neville Longbottom", age: 17},
        {id: 6, name: "Ginny Weasley", age: 16},
        {id: 7, name: "Fred Weasley", age: 19},
        {id: 8, name: "George Weasley", age: 19},
        {id: 9, name: "Albus Dumbledore", age: 150},
        {id: 10, name: "Severus Snape", age: 38},
        {id: 11, name: "Minerva McGonagall", age: 60},
        {id: 12, name: "Rubeus Hagrid", age: 61},
        {id: 13, name: "Sirius Black", age: 36},
        {id: 14, name: "Remus Lupin", age: 38},
        {id: 15, name: "Voldemort (Tom Riddle)", age: 71},
        {id: 16, name: "Cedric Diggory", age: 17},
        {id: 17, name: "Bellatrix Lestrange", age: 45},
        {id: 18, name: "Dolores Umbridge", age: 50},
        {id: 19, name: "Sybill Trelawney", age: 76},
        {id: 20, name: "Filius Flitwick", age: 62},
        {id: 21, name: "Pomona Sprout", age: 67}
    ];
    return (
        <div>
<MapComponent hogwartsStudents={hogwartsStudents}/>
        </div>
    )
}