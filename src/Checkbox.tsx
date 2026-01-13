export default function Checkbox(props: any) {
    const { question, index } = props

    return (
        <div className="flex flex-row gap-2 align-top justify-start">
            <p className="select-none">{index + 1}.</p>
            <input id={`check${index}`} type="checkbox" className="mt-0" />
            <label htmlFor={`check${index}`} className="select-none">{question}</label>
        </div>
    )
}