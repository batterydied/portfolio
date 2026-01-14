import { useState, useRef } from "react"
import pfp1 from "../assets/pfp1.png"
import pfp2 from "../assets/pfp2.png"
import pfp3 from "../assets/pfp3.png"
import LeftArrowSVG from "./svg/LeftArrow"
import RightArrowSVG from "./svg/RightArrow"

export default function DynamicProfile() {
  const images = [pfp1, pfp2, pfp3]
  const [index, setIndex] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const transitionDuration = 400 

  const extendedImages = [
    images[images.length - 1],
    ...images,
    images[0],
  ]

  const moveRight = () => {
    if (index >= extendedImages.length - 1) return
    setIndex((prev) => prev + 1)
  }

  const moveLeft = () => {
    if (index <= 0) return
    setIndex((prev) => prev - 1)
  }

  const handleTransitionEnd = () => {
    if (index === extendedImages.length - 1) {
      setIndex(1)
      if (sliderRef.current) {
        sliderRef.current.style.transition = "none"
        sliderRef.current.style.transform = `translateX(-100%)`
        void sliderRef.current.offsetWidth
        sliderRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`
      }
    } else if (index === 0) {
      setIndex(extendedImages.length - 2)
      if (sliderRef.current) {
        sliderRef.current.style.transition = "none"
        sliderRef.current.style.transform = `translateX(-${(extendedImages.length - 2) * 100}%)`
        void sliderRef.current.offsetWidth
        sliderRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`
      }
    }
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-w-[100px] w-[15%] aspect-square border-2 border-[var(--border)] rounded-full overflow-hidden"
    >
      <div
        ref={sliderRef}
        className="flex w-full h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full h-full flex-shrink-0 rounded-full object-cover"
          />
        ))}
      </div>

      {isHovered && (
        <LeftArrowSVG
          onClick={moveLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--border)] hover:text-[var(--text)] hover:cursor-pointer active:text-[var(--selected)]"
        />
      )}

      {isHovered && (
        <RightArrowSVG
          onClick={moveRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[var(--border)] hover:text-[var(--text)] hover:cursor-pointer active:text-[var(--selected)]"
        />
      )}
    </div>
  )
}
