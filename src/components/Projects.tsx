import i1 from "../assets/i1.png"
import i2 from "../assets/i2.png"
import i3 from "../assets/i3.png"
import i4 from "../assets/i4.png"
import ProjectEntry from "./ProjectEntry"

export default function Projects(){
    return (
        <div className="w-full">
            <div className="font-semibold text-[var(--text)] text-2xl my-4">
                My Projects
            </div>
            <div className="flex flex-col p-2">
                {projects.map((e)=><ProjectEntry name={e.name} description={e.description} image={e.image} githubLink={e.githubLink} demoLink={e.demoLink}/>)}
            </div>
        </div>
    )
}

interface Project {
    name: string,
    description: string,
    githubLink: string,
    demoLink: string
    image: string
}

const projects: Project[] = [
    {
        name: "FishiesSimulation",
        description: "2D aquarium game built with SFML graphic and C++.",
        githubLink: "https://github.com/batterydied/FishiesSimulation",
        demoLink: "",
        image: i1
    },
    {
        name: "IMS",
        description: "Invoice management system built with Next.js frontend, Python backend, and Supabase.",
        githubLink: "https://github.com/batterydied/IMS-frontend",
        demoLink: "",
        image: i2
    },
    {
        name: "Chatter",
        description: "Real time web chat platform built with React and Firebase.",
        githubLink: "https://github.com/batterydied/chatter",
        demoLink: "https://chatter-s3t1.vercel.app",
        image: i3
    },
    {
        name: "Stargazer",
        description: "Astronomical event web application built with React, MongoDB, and Clerk.",
        githubLink: "",
        demoLink: "https://stargazer320.vercel.app",
        image: i4
    },


]