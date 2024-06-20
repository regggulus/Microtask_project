import {FullInput} from "./components/FullInput";
import {useState} from "react";

export function Sprint2() {

    const [server, setServer] = useState([
        {message: 'message_1'},
        {message: 'message_2'},
        {message: 'message_3'},
    ])
    const addMessage = (title: string) => {
        let newMess = {message: title}
        setServer([...server, newMess])
    }
    return (
       <div>
           <FullInput addMessage={addMessage}/>
               {server.map( (el, index) => {
                   return (
                      <div key={index}>{el.message}</div>

                   )
               })}

       </div>

    )
}