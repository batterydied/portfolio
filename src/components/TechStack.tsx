import TailwindSVG from "./svg/TailwindSVG"
import HTMLSVG from "./svg/HTMLSVG"
import TechStackEntry from "./TechStackEntry"
import CSSSVG from "./svg/CSSSVG"
import TypeScriptSVG from "./svg/TypeScript"
import NextSVG from "./svg/NextSVG.js"
import ReactSVG from "./svg/ReactSVG.js"
import SupabaseSVG from "./svg/Supabase.js"
import FirebaseSVG from "./svg/Firebase.js"

export default function TechStack() {
    const techStacks = [
        { name: "HTML", Icon: HTMLSVG },
        { name: "CSS", Icon: CSSSVG },
        { name: "TypeScript", Icon: TypeScriptSVG },
        { name: "Next.js", Icon: NextSVG },
        { name: "React", Icon: ReactSVG },
        { name: "Tailwind", Icon: TailwindSVG},
        { name: "Supabase", Icon: SupabaseSVG },
        { name: "Firebase", Icon: FirebaseSVG },
    ]
    return (
        <div className="grid grid-cols-4 gap-2 mb-10">
            {techStacks.map((e)=><TechStackEntry name={e.name} Icon={e.Icon}/>)}
        </div>
    )
}