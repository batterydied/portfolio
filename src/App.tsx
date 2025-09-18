import { useCallback, useState } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Projects from "./components/Projects"

function App() {
  const [isImgLoaded, setIsImgLoaded] = useState(false)

  const handleImgLoaded = useCallback(() => {
    setIsImgLoaded(true)
  }, [])
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Hero onLoad={handleImgLoaded}/>
      <div className='flex flex-col justify-center items-center'>
        <Intro isImgLoaded={isImgLoaded}/>
        <Projects />
      </div>
      <div className='mt-60 w-full p-2 text-sm'>@ {new Date().getFullYear()} Benson Zheng</div>
    </div>
  )
}

export default App;
