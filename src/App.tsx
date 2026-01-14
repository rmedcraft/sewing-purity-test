import { useState } from "react"
import Checkbox from "./Checkbox"
import Logo from "./assets/sewing-purity-test-logo.png"
import Needle from "./assets/needle-icon.png"

const questions = [
    "Threaded a needle",
    "Sewn a hole",
    "Sewn a button",
    "Sewn two pieces of fabric together to create something",
    "Sewn upwards of 3 + pieces of fabric together",
    "Sewn a snap",
    "Sewn a zipper",
    "Sewn a hook and eye",
    "Basted something",
    "Used fray check",
    "Used heat n bond(and other stiffeners)",
    "Used tear away or dissolving stabilizer",
    "Starched something ",
    "Used water solluable thread",
    "Used a pattern",
    "Walked a pattern",
    "Made a buttonhole",
    "Seam ripped something",
    "Hemmed something",
    "Sewn with a machine",
    "Threaded a sewing machine",
    "Wound a bobbin",
    "Changed stitch length / width on a machine",
    "Changed a sewing machine needle",
    "Used a serger",
    "Threaded a serger",
    "Used a blind hemmer",
    "Threaded a blind hemmer",
    "Used a cover stitch",
    "Threaded a cover stitch",
    "Used beeswax",
    "Used tracing paper / wheel",
    "Sewn a dart",
    "Gathered something",
    "Used boning",
    "Used batting",
    "Embroidered something",
    "Beaded something",
    "Tambourbeaded something",
    "Made a pintuck",
    "Used smocking",
    "Draped a sewing pattern",
    "Designed a sewing pattern in 3D draping software",
    "Designed a textile / fabric",
    "Had fabric you've designed printed / produced",
    "Used horsehair braid",
    "Know 3 hand stitches",
    "Know over 3 hand stitches",
    "Used a thimble(correctly)",
    "Pad stitched or relate tailoring technique",
    "Thread traced something",
    "Added a metal eyelet to something",
    "Pleated something",
    "Lined a garment",
    "Used snap or magnet tape",
    "Actually adjusted the tension on your machine with purpose",
    "Pressed your seams",
    "Sewn on the fastest machine setting for a meaningful amount of time",
    "Used bias tape",
    "Made bias tape(correctly)",
    "Gathered something by only adjusting your feed dog tension",
    "Used a “fancy” sewing machine foot",
    "Pattern matched something",
    "Sewn a “blessed seam”",
    "Watched sewing content instead of actually creating as a substitute to procrastinate",
    "Sewn for work",
    "Done a French seam",
    "Done topstitching",
    "Used an industrial grade sewing machine",
    "Used an electric fabric cutter",
    "Gotten your pinking shears sharpened",
    "Done a mitered corner",
    "Used twill tape(for non decorative purposes)  75 sewn an invisible zipper that looks invisible on your garment",
    "Used a rotary cutter",
    "Made a shirring panel of any sort",
    "Made lingerie loops(not the ready - sew variant)",
    "Used bar tacks",
    "Welted something",
    "Fagoted something",
    "Injured yourself with a sewing pin(s) on accident",
    "Lost a game of bobbin chicken",
    "Had your machine serviced(or servicing it yourself)",
    "Graded a pattern",
    "Used pliers to help hand sew",
    "Sewn something inside out / backwards",
    "Hot glued a seam",
    "Made a transforming garment",
    "Made a tear away garment",
    "Sewn a non fabric material under a machine(ie cardboard, plastic bags, etc)",
    "Sold your sewn goods online or in person",
    "Sewn for a competition",
    "Eased something",
    "Hung a circle skirt overnight before hemming ",
    "Stay stitched something",
    "Used a ballpoint needle on stretchy fabric as god intended ",
    "Broken a needle ",
    "Sewn without taking the pins out when going under the machine",
    "Sewn something without pins",
    "Wear safety glasses when machine sewing",
    "Couched something",
]

function App() {
    const [total, setTotal] = useState<number>(0)

    const [finished, setFinished] = useState<boolean>(false)

    // this data type doesnt matter at all. it just triggers a useEffect in each checkbox component

    const [checked, setChecked] = useState<HTMLInputElement[]>([])

    function clearChecks() {
        checked.forEach((box) => {
            box.checked = false
        });
        setChecked([])

        setTotal(0)
    }

    return (
        <div className="w-full min-h-screen absolute top-0" style={{ backgroundImage: `url(${Needle})` }}>
            <div className="container max-w-xl m-2 mx-auto">
                <img src={Logo} />
                <p className='text-center mt-5'>The Sewing Purity Test is a voluntary self-assessment created by <a className="underline text-blue-600 hover:text-blue-800" href="https://fatalfabrix.wixsite.com/fatalfabrix">Bell Hansen</a> and <a className="underline text-blue-600 hover:text-blue-800" href="https://www.medcraft.dev">Rowan Medcraft</a>. It is an opportunity to reflect on the evolution of your interactions with sewing and sewing related material</p>
                <p className='text-center my-5 font-bold'>Caution: this is not a bucket list. Completion of all items on this test will likely result in death</p>

                {/* if the test is in progress */}
                {!finished && <>
                    {questions.map((question, index) => {
                        return <Checkbox question={question} key={index} index={index} setTotal={setTotal} setChecked={setChecked} />
                    })}
                    <div className="flex flex-row gap-4">
                        <button className="mt-4 p-4 border border-black transition-colors hover:bg-black hover:text-white" onClick={() => setFinished(true)}>Submit your score</button>
                        <button className="mt-4 p-4 border border-black transition-colors hover:bg-black hover:text-white" onClick={clearChecks}>Clear all boxes</button>
                    </div>
                </>}

                {/* if the user submitted the test */}
                {finished &&
                    <>
                        <h1 className="text-center text-2xl mt-5">Your final score:</h1>
                        <h1 className="text-center text-6xl my-2">{100 - total}</h1>
                        <button className="mt-4 p-4 border border-black transition-colors hover:bg-black hover:text-white"
                            onClick={() => {
                                clearChecks()
                                setFinished(false)
                            }}
                        >Take Again</button>
                    </>
                }
            </div>
        </div>
    )
}

export default App
