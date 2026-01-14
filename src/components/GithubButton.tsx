import PlainGithubSVG from "./svg/PlainGithubSVG"
export default function GithubButton({className, link} : {className : string, link: string}){
    return (
        <button onClick={() => window.location.href = link} className={`${className} min-w-[100px] bg-[var(--secondary)] p-2 border-1 border-[var(--border)] rounded-md text-[var(--text)] flex gap-2 items-center justify-center`}>
            <PlainGithubSVG />
            <div>
                Source
            </div>
        </button>
    )
}