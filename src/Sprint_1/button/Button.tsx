export type ButtonType = {
    name: string
}
export function Button({name}:ButtonType ) {
    return (
        <button type="submit">{name}</button>
    )
}