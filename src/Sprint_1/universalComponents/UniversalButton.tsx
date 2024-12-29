export type ButtonType = {
    name: string
    callback: ()=>void
}
export function UniversalButton({name, callback}:ButtonType ) {
    return (
        <button onClick={callback} type="submit">{name}</button>
    )
}