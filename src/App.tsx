import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import TechStack from "./components/TechStack"
import Map from "./components/Map"
import Clock from "./components/Clock"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="bg-[var(--bg)] w-full h-screen overflow-y-scroll">
      <div className="w-full h-screen flex justify-center items-start">
        <div className="bg-[var(--primary)] min-w-[300px] w-[35%] flex flex-col overflow-visible">
          <Navbar />
          <div className="relative mt-10">
            <Map />
            <div className="absolute top-2 right-1 z-50">
              <Clock />
            </div>
          </div>
          <Intro />
          <TechStack />
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
