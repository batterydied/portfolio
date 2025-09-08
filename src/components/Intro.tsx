import { motion, useInView, useAnimation } from "framer-motion"
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import { useRef, useEffect, useState } from "react"

const Intro = () => {
    const [flipped, setFlipped] = useState(false);
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(()=>{
        if(isInView){ 
            mainControls.start('visible')
            slideControls.start('clear')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])

    const handleClick = () => {
        setFlipped(prev => !prev);
    };

    return (
        <div className='relative'>
            <motion.div
                variants={{
                    blocked: { left: 0 },
                    clear:{ left: "100vw"}
                }}
                className="absolute bg-accent z-20 w-full h-full"
                initial='blocked'
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
            />
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75, scale: 0.8 },
                    visible:{ opacity: 1, y: 0, scale: 1 }
                }}
                initial='hidden'
                animate={mainControls}
                transition={{
                    duration: 0.5,
                    delay: 0.25
                }}
                className='flex flex-col lg:flex-row justify-center items-center p-8'
                ref={ref}
            >   
                <motion.div
                    className="flex w-[300px] h-[300px] relative justify-center cursor-pointer lg:mr-12"
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={handleClick}
                >
                    <motion.img
                        src={a1}
                        className='rounded-full absolute'
                        style={{ 
                            backfaceVisibility: "hidden",
                            opacity: flipped ? 0 : 1,
                            transition: "opacity 0.3s ease"
                        }}
                        draggable="false"
                    />
                    
                    <motion.img
                        src={a2}
                        className='rounded-full object-cover absolute w-[300px] h-[300px]'
                        style={{ 
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            opacity: flipped ? 1 : 0,
                            transition: "opacity 0.3s ease"
                        }}
                        draggable="false"
                    />
                </motion.div>
                <div className='max-w-[600px]'>
                    <div className='font-bold text-6xl py-2 lg:text-start text-center Montserrat'>
                        Hey, I'm Benson!
                    </div>
                    <div className='text-lg'>
                        I code things that make life a little easier and a lot more fun. From dynamic web apps to interactive UI animations, I love turning ideas into reality, one line of code at a time.
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Intro