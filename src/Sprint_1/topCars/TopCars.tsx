import {useState} from "react";
import {TopCarsDate} from "./TopCarsDate";

export function TopCars() {
    const [car, setCar] = useState([
        { manufacturer: 'BMW', model: 'M5 CS' },
        { manufacturer: 'Mercedes', model: 'E63 S' },
        { manufacturer: 'Audi', model: 'RS6' }
    ])
    return (
        <div>
            <TopCarsDate cars={car}/>
        </div>
    )
}