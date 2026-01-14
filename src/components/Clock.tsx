import { useEffect, useState } from "react"

function getHoursDiffFromEST() {
  const here = new Date();
  const est = new Date(
    here.toLocaleString("en-US", { timeZone: "America/New_York" })
  );

  return (est.getTime() - here.getTime()) / (1000 * 60 * 60);
}

export default function Clock() {
    const diff = Math.trunc(getHoursDiffFromEST())
    let aheadBehind = "";

    if (diff < 0) {
        aheadBehind = `You're +${diff} hours ahead`
    } else if (diff > 0) {
        aheadBehind = `You're -${diff} hours behind`
    } else {
        aheadBehind = "You're in the same timezone"
    }

    const [time, setTime] = useState(() => new Date())
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const tick = () => setTime(new Date())

        tick()

        const now = new Date()
        const delay = (60 - now.getSeconds()) * 1000
        const timeout = setTimeout(() => {
        tick()
        const interval = setInterval(tick, 60_000)
        return () => clearInterval(interval)
        }, delay)

        return () => clearTimeout(timeout)
    }, [])

    const formattedTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/New_York",
        timeZoneName: "short"
    })
    
    return (
        <div className="relative inline-block">
            {isHovered && (
                <>
                    <div className="text-sm border-1 border-[var(--border)] absolute -translate-x-1/2 left-1/2 -top-13 mt-1 px-2 py-1 bg-[var(--primary)] text-[var(--text)] rounded-md whitespace-nowrap min-w-max z-50">
                        {`${aheadBehind}`}
                    </div>
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-[var(--border)]"></div>
                </>
            )}
            <div className="p-2 text-[var(--border)] bg-[var(--secondary)] rounded-md text-sm font-mono" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                {formattedTime}
            </div>
        </div>
    )
}
