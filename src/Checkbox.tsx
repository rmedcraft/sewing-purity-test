export default function Checkbox(props: any) {
    const { question, index, setTotal } = props

    return (
        <div className="flex flex-row gap-2 align-top justify-start">
            <p className="select-none">{`${index + 1}.`.padEnd(4, " ")}</p>
            <input id={`check${index}`} type="checkbox" className="cursor-pointer" onChange={(e: any) => {
                if (e.target.checked) {
                    setTotal((total: number) => total + 1)
                } else {
                    setTotal((total: number) => total - 1)
                }
            }} />
            <label htmlFor={`check${index}`} className="select-none cursor-pointer">{question}</label>
        </div>
    )
}