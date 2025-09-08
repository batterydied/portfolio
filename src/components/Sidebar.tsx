import { motion, useAnimation, useInView } from "framer-motion"
import { GithubIcon, LinkedInIcon } from "./Icons"
import { useEffect, useRef } from "react"

interface SidebarProps{
    className?: string
}

const Sidebar = ({className} : SidebarProps) => {
    const ref = useRef(null)
    const popControls = useAnimation()
    const isInView = useInView(ref, {once: false})
    
    useEffect(()=>{
        if(isInView){ 
            popControls.start('visible')
        }else{
            popControls.start("hidden")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])
    
    return (
        <motion.div 
        ref={ref}
        variants={{
            hidden: { opacity: 0, scale: 0},
            visible:{ opacity: 1, scale: 1}
        }}
        initial='hidden'
        animate={popControls}
        className={className}
        transition={{ duration: 1, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }}}
        >
            <motion.div 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className='m-1 w-fit hover:cursor-pointer'>
                <div className='bg-white w-fit h-fit inline-block rounded-full'>
                    <a href='https://github.com/batterydied' target='_blank'>
                        <GithubIcon size={36} className='text-black'/>
                    </a>
                </div>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className='m-1 w-fit hover:cursor-pointer'>
                <a href='https://www.linkedin.com/in/benson-zheng-39b2321bb/' target='_blank'>
                    <LinkedInIcon size={36} className='rounded-full'/>
                </a>
            </motion.div>
        </motion.div>
    )
}

export default Sidebar