export function Button(props: any) {
    const { onClick, children } = props
    return (
        <button className="mt-4 p-4 border border-black transition-colors hover:bg-black hover:text-white" onClick={onClick}>
            {children}
        </button>
    )
}