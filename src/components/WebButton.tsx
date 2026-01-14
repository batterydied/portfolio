import PlainWebSVG from "./svg/PlainWebSVG"
export default function WebButton({className, link} : {className : string, link: string}){
    return (
        <button onClick={() => window.location.href = link} className={`${className} min-w-[100px] bg-[var(--text)] p-2 rounded-md flex gap-2 items-center justify-center`}>
            <PlainWebSVG />
            <div>
                Visit
            </div>
        </button>
    )
}