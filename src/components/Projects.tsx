import * as motion from "motion/react-client"
import { useInView, type Variants } from "motion/react"
import { useEffect, useRef, useState } from "react"
import aquatify from '../assets/aquatify.png'
import chatter from '../assets/chatter.png'
import stargazer from '../assets/stargazer.png'

interface Project{
    name: string,
    description: string,
    link: string,
    hueA: string,
    hueB: string,
    imgSrc: string
}

const projects: Project[] = [
    {
        name: "Chatter",
        description: "Real-time chat app using React + Firebase.",
        link: "https://chatter-s3t1.vercel.app/",
        hueA:"#FF4D4D",
        hueB: "#CC0000",
        imgSrc: chatter
    },
    {
        name: "Aquatify",
        description: "React Native ecommerce app for aquarium hobbyists.",
        link: "https://github.com/batterydied/Aquatify",
        hueA: "#4D79FF",
        hueB: "#0033CC",
        imgSrc: aquatify
    },
     {
        name: "Stargazer",
        description: "Astronomy exploration app with live celestial data.",
        link: "https://stargazer320.vercel.app",
        hueA: "#4DFF4D",
        hueB: "#009900",
        imgSrc: stargazer
    },
];

export default function ScrollTriggered() {
    return (
        <div className='flex flex-col items-center mt-32'>
            <div className='text-6xl Montserrat'>
                Projects
            </div>
            {projects.map((p, i) => (
                <Card i={i} hueA={p.hueA} hueB={p.hueB} imgSrc={p.imgSrc} description={p.description} link={p.link} key={i} />
            ))}
        </div>
    )
}

interface CardProps {
    hueA: string
    hueB: string,
    description: string,
    imgSrc: string,
    link: string,
    i: number
}

function Card({ description, hueA, hueB, imgSrc, link, i }: CardProps) {
    const [shouldShowDescription, setShouldShowDescription] = useState(false)
    const background = `linear-gradient(306deg, ${hueA}, ${hueB})`

    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref)

    useEffect(()=>{
        if(isInView) setShouldShowDescription(false)
    }, [isInView])

    const handleVisit = (link: string) => {
        window.open(link, "_blank", "noopener,noreferrer")
    }

    return (
        <motion.div
            ref={ref}
            className={`card-container-${i} hover:cursor-pointer`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
            onClick={()=>setShouldShowDescription(prev=>!prev)}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card text-sm overflow-hidden">
                {!shouldShowDescription ? 
                    <img src={imgSrc} className='object-cover w-full h-full'/>
                    :
                    <div style={{ "--hueA": hueA, "--hueB": hueB } as React.CSSProperties} className='relative flex flex-col justify-center items-center p-8 text-md h-full bg-black'>
                        <button className='absolute top-[10%] border-[var(--hueA)] text-[var(--hueB)] btn bg-transparent hover:bg-[var(--hueA)] hover:text-white' onClick={()=>handleVisit(link)}>Visit Me!</button>
                        <div className='text-center text-[var(--hueA)]'>
                            {description}
                        </div>
                    </div>
                }
            </motion.div>
        </motion.div>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const cardContainer: React.CSSProperties = {
    width: 500,
    height: 430,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    fontSize: 30,
    color: 'black',
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

