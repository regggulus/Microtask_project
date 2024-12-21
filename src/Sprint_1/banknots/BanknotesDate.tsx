export type MoneyType = {
    banknotes: string
    nominal: number
    serialNumber: string
}
export type BanknotesDateType = {
    money: Array<MoneyType>
}

export function BanknotesDate({money}: BanknotesDateType) {
    return (
        <div>
            <h1>Banknotes</h1>
            <table style={{ width: '50%', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Banknotes</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nominal</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Serial Number</th>
                </tr>
                </thead>
                <tbody>
                {money.map((m, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{m.banknotes}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{m.nominal}</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{m.serialNumber}</td>
                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    )
}