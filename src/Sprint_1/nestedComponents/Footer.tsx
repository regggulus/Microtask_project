type FooterType = {
    collapsed: boolean
    title: string
}
export const Footer = ({collapsed, title}: FooterType) => {
    return (
        <div>
            {
                collapsed
                    ?
                    <h3>{title}
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </h3>
                    :
                    <h3>{title}</h3>

            }
        </div>
    )
}