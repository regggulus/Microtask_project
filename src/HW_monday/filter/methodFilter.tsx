import React, {useState} from "react";

export function MethodFilter() {
    const [money, setMoney] = useState([
        {id: 1, banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {id: 2, banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {id: 3, banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {id: 4, banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {id: 5, banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {id: 6, banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {id: 7, banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {id: 8, banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let currentMoney = money
    {
        if (buttonMon === "RUBLS") {
            currentMoney = money.filter((filMon) => filMon.banknots === "RUBLS")
            if (currentMoney === "Dollars") {
                currentMoney = money.filter((filMon) => filMon.banknots === "Dollars")
            }
        }
    }


    const onClickHandler = (buttonMon: string) => {

        return (

            <div>

            </div>
        )
    }
    return (
        <div>
            <ul>
                {currentMoney.map((objMoney, index) => {
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
                <button onClick={() => onClickHandler("All")}>All</button>
                <button onClick={() => onClickHandler("RUBLS")}>Rub</button>
                <button onClick={() => onClickHandler("Dollars")}>Dollars</button>
            </div>
        </div>


    )
}