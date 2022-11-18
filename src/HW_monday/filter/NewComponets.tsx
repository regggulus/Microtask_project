import React from "react";
import {FilterMoneyType, MethodFilterType} from "./methodFilter";


type NewComponetsTypeProps = {
    filMon: Array<MethodFilterType>
    onClickHandler: (nameButt: FilterMoneyType) => void
}
export function NewComponets (props: NewComponetsTypeProps) {
    return (
        <div>
            <ul >
                {props.filMon.map((objMoney, index) => {
                    return (

                        //можно в key использовать id так же
                        <li key={index}>
                            <span>{objMoney.banknots}</span>
                            <span>{objMoney.value}</span>
                            <span>{objMoney.number}</span>
                        </li>
                    )
                })
                }

            </ul>
            <div style={{padding: "10px 0 0 30px"}}>
                <button onClick={() => props.onClickHandler("All")}>All</button>
                <button onClick={() => props.onClickHandler("RUBLS")}>Rub</button>
                <button onClick={() => props.onClickHandler("Dollars")}>Dollars</button>
            </div>
        </div>
    )
}