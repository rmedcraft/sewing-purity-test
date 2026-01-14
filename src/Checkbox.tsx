export default function Checkbox(props: any) {
    const { question, index, setTotal, setChecked } = props

    return (
        <div className="flex flex-row gap-2 align-top justify-start">
            <p className="select-none text-end">{`${index + 1}.`.padEnd(4, " ")}</p>
            <input id={`check${index}`} type="checkbox" className="cursor-pointer" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.checked) {
                    setTotal((total: number) => total + 1)
                    // checkedBoxes.push(e.target)
                    setChecked((checked: HTMLInputElement[]) => [...checked, e.target])
                } else {
                    setTotal((total: number) => total - 1)
                    setChecked((checked: HTMLInputElement[]) => checked.filter((box) => box != e.target))
                }
            }} />
            <label htmlFor={`check${index}`} className="select-none cursor-pointer">{question}</label>
        </div>
    )
}