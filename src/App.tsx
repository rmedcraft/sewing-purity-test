import { useState } from "react"
import Checkbox from "./Checkbox"
import Logo from "./assets/sewing-purity-test-logo.png"

const questions = [
    "thread a needle",
    "sew a hole",
    "sew a button",
    "sew two pieces of fabric together to create something",
    "sew upwards of 3 + pieces of fabric together",
    "sewn a snap",
    "sewn a zipper",
    "sewn a hook and eye",
    "basted something",
    "used fray check",
    "used heat n bond(and other stiffeners)",
    "used tear away or dissolving stabilizer",
    "starched something ",
    "used water solluable thread",
    "used a pattern",
    "walked a pattern",
    "made a buttonhole",
    "seam ripped something",
    "hemmed something",
    "sewn with a machine",
    "threaded a sewing machine",
    "wound a bobbin",
    "changed stitch length / width on a machine",
    "changed a sewing machine needle",
    "used a serger",
    "threaded a serger",
    "used a blind hemmer",
    "threaded a blind hemmer",
    "used a cover stitch",
    "threaded a cover stitch",
    "used beeswax",
    "used tracing paper / wheel",
    "sewn a dart",
    "gathered something",
    "used boning",
    "used batting",
    "embroidered something",
    "beaded something",
    "tambourbeaded something",
    "made a pintuck",
    "used smocking",
    "draped a sewing pattern",
    "designed a sewing pattern in 3D draping software",
    "designed a textile / fabric",
    "had fabric you've designed printed / produced",
    "used horsehair braid",
    "know 3 hand stitches",
    "know over 3 hand stitches",
    "use a thimble(correctly)",
    "pad stitched or relate tailoring technique",
    "thread traced something",
    "added a metal eyelet to something",
    "pleated something",
    "lined a garment",
    "used snap or magnet tape",
    "actually adjusted the tension on your machine with purpose",
    "pressed your seams",
    "sewn on the fastest machine setting for a meaningful amount of time",
    "used bias tape",
    "made bias tape(correctly)",
    "gathered something by only adjusting your feed dog tension",
    "used a “fancy” sewing machine foot",
    "pattern matched something",
    "sewn a “blessed seam”",
    "watched sewing content instead of actually creating as a substitute to procrastinate",
    "sew for work",
    "done a French seam",
    "done topstitching",
    "used an industrial grade sewing machine",
    "used an electric fabric cutter",
    "gotten your pinking shears sharpened",
    "done a mitered corner",
    "used twill tape(for non decorative purposes)  75 sewn an invisible zipper that looks invisible on your garment",
    "used a rotary cutter",
    "made a shirring panel of any sort",
    "able to make lingerie loops(not the ready - sew variant)",
    "used bar tacks",
    "welted something",
    "fagoted something",
    "injured yourself with a sewing pin(s) on accident",
    "lost a game of bobbin chicken",
    "had your machine serviced(or servicing it yourself)",
    "graded a pattern",
    "used pliers to help hand sew",
    "sewn something inside out / backwards",
    "hot glued a seam",
    "made a transforming garment",
    "made a tear away garment",
    "sewn a non fabric material under a machine(ie cardboard, plastic bags, etc)",
    "sold your sewn goods online or in person",
    "sewn for a competition",
    "eased something",
    "hung a circle skirt overnight before hemming ",
    "stay stitched something",
    "used a ballpoint needle on stretchy fabric as god intended ",
    "broken a needle ",
    "sewn without taking the pins out when going under the machine",
    "sewn something without pins",
    "wear safety glasses when machine sewing",
    "couched something",
]

function App() {
    const [total, setTotal] = useState<number>(0)

    const [finished, setFinished] = useState<boolean>(false)

    return (
        <div className="container max-w-xl my-2 mx-auto">
            <img src={Logo} />
            <p className='text-center mt-5'>The Sewing Purity Test is a voluntary self-assessment created by Bell Hansen and Rowan Medcraft. It is an opportunity to reflect on the evolution of your interactions with sewing and sewing related material</p>
            <p className='text-center my-5 font-bold'>Caution: this is not a bucket list. Completion of all items on this test will likely result in death</p>

            {/* if the test is in progress */}
            {!finished && <>
                {questions.map((question, index) => {
                    return <Checkbox question={question} key={index} index={index} setTotal={setTotal} />
                })}
                <button className="mt-4 p-4 border border-black transition-colors hover:bg-black hover:text-white" onClick={() => setFinished((finished) => !finished)}>Submit your score</button>
            </>}

            {/* if the user submitted the test */}
            {finished &&
                <>
                    <h1 className="text-center text-2xl mt-5">Your final score:</h1>
                    <h1 className="text-center text-6xl my-2">{total}</h1>
                </>
            }
        </div>
    )
}

export default App
