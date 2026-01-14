import Intro from "./components/Intro"
import Navbar from "./components/Navbar"
import TechStack from "./components/TechStack"
import Map from "./components/Map"
import Clock from "./components/Clock"

function App() {
  return (
    <div className="bg-[var(--bg)] w-full min-h-screen flex flex-col justify-center items-center">
      <div className="relative bg-b w-full h-screen flex justify-center overflow-visible">
        
        <div className="bg-[var(--primary)] min-w-[300px] w-[35%] h-full flex flex-col overflow-visible">
          <Navbar />
          <div className="relative mt-10">
            <Map />
            <div className="absolute top-2 right-1 z-50">
              <Clock />
            </div>
          </div>
          <Intro />
          <TechStack />
        </div>
      </div>
    </div>
  )
}

export default App
