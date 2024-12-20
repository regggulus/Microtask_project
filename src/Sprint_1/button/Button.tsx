export type ButtonType = {
    name: string
    callback: ()=>void
}
export function Button({name, callback}:ButtonType ) {
    return (
        <button onClick={callback} type="submit">{name}</button>
    )
}