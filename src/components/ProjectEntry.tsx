import GithubButton from "./GithubButton"
import WebButton from "./WebButton"

interface ProjectEntry {
    githubLink: string,
    demoLink: string,
    description: string,
    image: string,
    name: string
}
export default function ProjectEntry({githubLink, demoLink, description, image, name} : ProjectEntry){
    return (
        <div className="w-full h-full py-8">
            <img className="w-full h-56 object-cover rounded-md" src={image} />
            <div className="py-2 text-[var(--text)]">
                {name}
            </div>
            <div className="pb-2 text-[#A3A3A3] text-sm">
                {description}
            </div>
            <div className="flex gap-4">
                <GithubButton link={githubLink} className={githubLink == "" ? "hover:cursor-not-allowed disabled" : "hover:cursor-pointer"}/>
                <WebButton link={demoLink} className={demoLink == "" ? "hover:cursor-not-allowed disabled" : "hover:cursor-pointer"}/>
            </div>
        </div>
    )
}